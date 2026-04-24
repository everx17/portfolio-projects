using UnityEngine;

public class BroomEquipScript : MonoBehaviour
{
    public AudioClip cleanUpSound;
    private AudioSource audioSource;
    public Transform rightHandBone;
    public GameObject broomPrefab;
    public Vector3 positionOffset;
    public Vector3 rotationOffset;
    public int messesCleanedUp = 0;
    private GameObject currentBroom;
    private bool isNearBroom;
    private void Start()
    {
        audioSource = GetComponent<AudioSource>();
        if (audioSource == null)
        {
            Debug.LogError("No AudioSource component found on this GameObject. Please add one.");
        }
    }
    void Update()
    {
        if (isNearBroom && Input.GetKeyDown(KeyCode.F) && currentBroom == null)
        {
            EquipBroom();
        }
    }
    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("Broom"))
        {
            isNearBroom = true;
        }
        else if (currentBroom != null && other.gameObject.CompareTag("Mess"))
        {
            CleanUpMess(other.gameObject);
        }
    }
    void OnTriggerExit(Collider other)
    {
        if (other.gameObject.CompareTag("Broom"))
        {
            isNearBroom = false;
        }
    }
    void EquipBroom()
    {
        currentBroom = Instantiate(broomPrefab, rightHandBone.position, Quaternion.identity, rightHandBone);
        currentBroom.transform.localPosition = positionOffset;
        currentBroom.transform.localRotation = Quaternion.Euler(rotationOffset);
        Collider broomCollider = currentBroom.GetComponent<Collider>();
        if (broomCollider != null)
        {
            broomCollider.enabled = false;
        }
    }
    void CleanUpMess(GameObject mess)
    {
        Debug.Log("Messes cleaned up: " + messesCleanedUp);
        messesCleanedUp++;
        Destroy(mess);
        if (audioSource != null && cleanUpSound != null)
        {
            audioSource.PlayOneShot(cleanUpSound);
        }
    }
}
