using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class PopupManager : MonoBehaviour
{
    public GameObject popupPanel;
    public Text popupText;

    void Start()
    {
        popupPanel.SetActive(false);
    }

    public void ShowPopup(string message)
    {
        if (popupText != null)
        {
            popupText.text = message;
        }
        else
        {
            Debug.LogError("Popup Text component not assigned in PopupManager.");
        }

        popupPanel.SetActive(true);
        StartCoroutine(HidePopupAfterDelay(5f));
    }

    private IEnumerator HidePopupAfterDelay(float delay)
    {
        yield return new WaitForSeconds(delay);
        popupPanel.SetActive(false);
    }

    public void ClosePopup()
    {
        popupPanel.SetActive(false);
    }
}
