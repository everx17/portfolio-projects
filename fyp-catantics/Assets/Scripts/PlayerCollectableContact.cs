using UnityEngine;

public class CollectableContactPlayer : MonoBehaviour
{
    public AudioClip collectSound; 
    private AudioSource audioSource;
    private PopupManager popupManager;

    private TimerScript timerScript; 

    private void Start()
    {
        popupManager = FindObjectOfType<PopupManager>(); 
        audioSource = FindObjectOfType<AudioSource>(); 
        if (!audioSource)
        {
            Debug.LogError("AudioSource component not found in the scene. Please add one.");
        }
        timerScript = FindObjectOfType<TimerScript>();
        if (!timerScript)
        {
            Debug.LogError("TimerScript component not found in the scene. Please add one.");
        }
    }

private void OnTriggerEnter(Collider other)
{
    if (other.CompareTag("Player")) 
    {
        if (audioSource && collectSound)
        {
            audioSource.PlayOneShot(collectSound); 
            timerScript.AddTime(5);

            ItemInfo itemInfo = GetComponent<ItemInfo>();

            if (itemInfo != null)
            {
                popupManager.ShowPopup(itemInfo.collectedMessage);
            }
            else
            {
                popupManager.ShowPopup("You collected an item!");
            }
        }
        else
        {
            Debug.LogError("Collect sound or AudioSource is missing.");
        }
        
        Destroy(gameObject);
    }
}

}
