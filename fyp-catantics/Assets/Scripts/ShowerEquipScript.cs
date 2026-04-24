using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ShowerEquipScript : MonoBehaviour
{
    public AudioClip showerSound; 
    private AudioSource audioSource;
    public static bool ItemEquipped = false;
    public Transform rightHandBone; 
    public GameObject ShowerPrefab; 
    public Vector3 positionOffset; 
    public Vector3 rotationOffset; 
    public HandTriggerScript HandTriggerScript; 
    private GameObject currentShower; 
    public GameObject originalShower; 
    private bool isNearShower;
    private bool isColliderWithCatActive = false; 
    private int showerContactCount = 0; 

    public GameObject ShowerEffectPrefab;

    void Update()
    {
        if (!ItemEquipped && isNearShower && Input.GetKeyDown(KeyCode.F) && currentShower == null)
        {
            EquipShower();
            ItemEquipped = true;
        }

        if (ItemEquipped && currentShower && Input.GetKeyDown(KeyCode.T))
        {
            DropShower();
            ItemEquipped = false;
        }

        if (isColliderWithCatActive && Input.GetMouseButtonDown(0)) 
        {
            showerContactCount++;
            if (showerContactCount >= 5 && HandTriggerScript.getCatSoaped() == true) 
            {
                ApplyShowerEffect();
                HandTriggerScript.SetCatShowered(true);
                Debug.Log("Cat is Showered.");
                showerContactCount = 0; 
            }
        }
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("Shower"))
        {   
            isNearShower = true;
        }
        if (ItemEquipped && other.gameObject.CompareTag("Cat"))
        {
            isColliderWithCatActive = true; 
        }
    }

    void OnTriggerExit(Collider other)
    {
        if (other.gameObject.CompareTag("Shower"))
        {
            isNearShower = false;
        }
        if (other.gameObject.CompareTag("Cat"))
        {
            isColliderWithCatActive = false; 
            showerContactCount = 0;
        }
    }

    void EquipShower()
    {
        currentShower = Instantiate(ShowerPrefab, rightHandBone.position, Quaternion.identity, rightHandBone);
        Destroy(originalShower);
        currentShower.transform.localPosition = positionOffset;
        currentShower.transform.localRotation = Quaternion.Euler(rotationOffset);

        if (currentShower.GetComponent<Collider>() == null)
        {
            var collider = currentShower.AddComponent<BoxCollider>(); 
            collider.isTrigger = true;
        }
    }

    void DropShower()
    {
        originalShower = Instantiate(ShowerPrefab, rightHandBone.position, Quaternion.identity);
        originalShower.transform.position = new Vector3(originalShower.transform.position.x, 0.4f, originalShower.transform.position.z);
        Destroy(currentShower);
    }

    void OnTriggerEnterShower(Collider other)
    {
        if (ItemEquipped && other.gameObject.CompareTag("Cat"))
        {

            if (HandTriggerScript.getCatSoaped() == true)
            {
                ApplyShowerEffect();
                HandTriggerScript.SetCatShowered(true);
                Debug.Log("Cat is Showered.");
            }
            else
            {
                Debug.Log("Cat is not soaped.");
            }
        }

        if (audioSource != null && showerSound != null)
        {
            audioSource.PlayOneShot(showerSound);
        }
    }

    void ApplyShowerEffect()
    {
        // Instantiate or activate the Shower effect when the Shower makes contact with the cat
        // if (ShowerEffectPrefab != null)
        // {
        //     var effectInstance = Instantiate(ShowerEffectPrefab, currentShower.transform.position, Quaternion.identity);
        //     Debug.Log("Applying Shower effect to the cat.");

        //     // Destroy the effect after a certain time if it's not meant to be permanent
        //     Destroy(effectInstance, 5f); // Adjust the lifetime of the effect as necessary
        // }
    }
}
