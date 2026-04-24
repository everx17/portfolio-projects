using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class screwDriverScript : MonoBehaviour
{
    public AudioClip screwdriverSound;
    private AudioSource audioSource;
    public static bool ItemEquipped = false;
    public Transform rightHandBone;
    public GameObject ScrewDriverPrefab;
    public Vector3 positionOffset;
    public Vector3 rotationOffset;
    public HandTriggerScript HandTriggerScript;

    private GameObject currentScrewDriver;
    public GameObject originalScrewDriver;
    private bool isNearScrewDriver;
    private bool isColliderWithPanelActive = false;
    private int screwDriverContactCount = 0;

    void Update()
    {
        if (!ItemEquipped && isNearScrewDriver && Input.GetKeyDown(KeyCode.F) && currentScrewDriver == null)
        {
            EquipScrewDriver();
            ItemEquipped = true;
        }
        else if (ItemEquipped && currentScrewDriver && Input.GetKeyDown(KeyCode.T))
        {
            DropScrewDriver();
            ItemEquipped = false;
        }

        if (isColliderWithPanelActive && Input.GetMouseButtonDown(0))
        {
            screwDriverContactCount++;
            if (screwDriverContactCount >= 5)
            {
                HandTriggerScript.SetCircuitFixed(true);
                Debug.Log("Circuit fixed.");
                screwDriverContactCount = 0;
            }
        }
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("Screwdriver"))
        {   
            isNearScrewDriver = true;
        }
        else if (ItemEquipped && other.gameObject.CompareTag("Panel"))
        {
            isColliderWithPanelActive = true;
        }
    }

    void OnTriggerExit(Collider other)
    {
        if (other.gameObject.CompareTag("Screwdriver"))
        {
            isNearScrewDriver = false;
        }
        else if (other.gameObject.CompareTag("Panel"))
        {
            isColliderWithPanelActive = false;
            screwDriverContactCount = 0;
        }
    }

    void EquipScrewDriver()
    {
        currentScrewDriver = Instantiate(ScrewDriverPrefab, rightHandBone.position, Quaternion.identity, rightHandBone);
        Destroy(originalScrewDriver);
        currentScrewDriver.transform.localPosition = positionOffset;
        currentScrewDriver.transform.localRotation = Quaternion.Euler(rotationOffset);
        SetupCollider(currentScrewDriver);
    }

    void DropScrewDriver()
    {
        originalScrewDriver = Instantiate(ScrewDriverPrefab, rightHandBone.position, Quaternion.identity);
        originalScrewDriver.transform.position = new Vector3(originalScrewDriver.transform.position.x, 0.4f, originalScrewDriver.transform.position.z);
        Destroy(currentScrewDriver);
    }

    void OnTriggerEnterScrewDriver(Collider other)
    {
        if (audioSource != null && screwdriverSound != null)
        {
            audioSource.PlayOneShot(screwdriverSound);
        }
    }

    void SetupCollider(GameObject screwDriver)
    {
        if (screwDriver.GetComponent<Collider>() == null)
        {
            var collider = screwDriver.AddComponent<BoxCollider>();
            collider.isTrigger = true;
        }
    }
}
