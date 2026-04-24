using UnityEngine;

public class MessCleanScript : MonoBehaviour
{
    public string triggeringTag = "Broom"; 

    void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Broom"))
        {
            Debug.Log("Mess hit by broom");
            Destroy(gameObject); 
        }
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag(triggeringTag))
        {
            Debug.Log("Mess hit by broom");
            Destroy(gameObject); 
        }
    }
}
