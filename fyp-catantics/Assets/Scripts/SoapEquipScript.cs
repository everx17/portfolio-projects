using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoapEquipScript : MonoBehaviour
{

    public AudioClip soapSound;
    private AudioSource audioSource; public static bool ItemEquipped = false;
    public Transform rightHandBone; 
    public GameObject soapPrefab; 
    public Vector3 positionOffset; 
    public Vector3 rotationOffset; 
    public HandTriggerScript HandTriggerScript; 

    private GameObject currentSoap; 
    public GameObject originalSoap; 
    private bool isNearSoap; 

    public GameObject soapEffectPrefab;

    private int soapContactCount = 0; 
    private bool isColliderActive = false; 

    void Update()
    {
        if (!ItemEquipped && isNearSoap && Input.GetKeyDown(KeyCode.F) && currentSoap == null)
        {
            EquipSoap();
            ItemEquipped = true;
        }

        if (ItemEquipped && currentSoap && Input.GetKeyDown(KeyCode.T))
        {
            DropSoap();
            ItemEquipped = false;
        }

        if (Input.GetMouseButtonDown(0) && isColliderActive) 
        {
            soapContactCount++;
            Debug.Log("Mouse clicked inside collider.");

            if (soapContactCount >= 5) 
            {
                HandTriggerScript.SetCatSoaped(true);
                Debug.Log("Cat is soaped.");
                soapContactCount = 0; 
            }
        }
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("Soap"))
        {
            isNearSoap = true;
        }
        if (ItemEquipped && other.gameObject.CompareTag("Cat"))
        {
            OnTriggerEnterSoap(other);
        }
    }

    void OnTriggerExit(Collider other)
    {
        if (other.gameObject.CompareTag("Soap"))
        {
            isNearSoap = false;
        }
    }

    void EquipSoap()
    {
        currentSoap = Instantiate(soapPrefab, rightHandBone.position, Quaternion.identity, rightHandBone);
        Destroy(originalSoap);
        currentSoap.transform.localPosition = positionOffset;
        currentSoap.transform.localRotation = Quaternion.Euler(rotationOffset);

        if (currentSoap.GetComponent<Collider>() == null)
        {
            var collider = currentSoap.AddComponent<BoxCollider>(); 
            collider.isTrigger = true;
        }
    }

    void DropSoap()
    {
        originalSoap = Instantiate(soapPrefab, rightHandBone.position, Quaternion.identity);
        originalSoap.transform.position = new Vector3(originalSoap.transform.position.x, 0.4f, originalSoap.transform.position.z);
        Destroy(currentSoap);
    }

    void OnTriggerEnterSoap(Collider other)
    {
        Debug.Log("Soap makes contact with the cat.");
        if (ItemEquipped && other.gameObject.CompareTag("Cat"))
        {
            Debug.Log("Soap makes contact with the cat.");
            ApplySoapEffect(); 
            HandTriggerScript.SetCatSoaped(true);
            Debug.Log("Cat is soaped.");
            isColliderActive = true; 
        }

        if (audioSource != null && soapSound != null)
        {
            audioSource.PlayOneShot(soapSound);
        }
    }

    void ApplySoapEffect()
    {
        // Instantiate or activate the soap effect when the soap makes contact with the cat
        // if (soapEffectPrefab != null)
        // {
        //     var effectInstance = Instantiate(soapEffectPrefab, currentSoap.transform.position, Quaternion.identity);
        //     Debug.Log("Applying soap effect to the cat.");

        //     // Destroy the effect after a certain time if it's not meant to be permanent
        //     Destroy(effectInstance, 5f); // Adjust the lifetime of the effect as necessary
        // }
    }
}
