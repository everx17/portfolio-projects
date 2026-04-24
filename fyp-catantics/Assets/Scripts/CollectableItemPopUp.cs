using UnityEngine;
using UnityEngine.UI;

public class CollectableItemPopUp : MonoBehaviour
{
    public float displayDuration = 2f;
    public Text popUpText;
    private void Start()
    {
        if (popUpText == null)
        {
            Debug.LogWarning("PopUpText reference is missing in the inspector!", this);
        }
        gameObject.SetActive(false);
        Invoke("HidePopUp", displayDuration);
    }
    private void HidePopUp()
    {
        gameObject.SetActive(false);
    }
    public void ShowPopUp(string message)
    {
        if (popUpText != null)
        {
            popUpText.text = message;
        }
        else
        {
            Debug.LogError("PopUpText is not assigned. Please assign a Text component in the inspector.", this);
        }
        gameObject.SetActive(true);
    }
}
