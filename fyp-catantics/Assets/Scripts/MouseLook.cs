using UnityEngine;
using System.Collections;

public class MouseLook : MonoBehaviour
{
    public float mouseSensitivity = 100f;
    public Transform playerBody;

    void Start()
    {
        StartCoroutine(LockCursorAfterDelay());
    }

    void Update()
    {
        float mouseX = Input.GetAxis("Mouse X") * mouseSensitivity * Time.deltaTime;
        playerBody.Rotate(Vector3.up * mouseX);
        if(Input.GetKeyDown(KeyCode.Escape))
        {
            Cursor.lockState = CursorLockMode.None;
            Cursor.visible = true;
        }
        if(Input.GetMouseButtonDown(0))
        {
            Cursor.lockState = CursorLockMode.Locked;
            Cursor.visible = false;
            Debug.Log("Cursor.lockState=" + Cursor.lockState + ", Cursor.visible=" + Cursor.visible);
        }
    }

    private IEnumerator LockCursorAfterDelay()
    {
        yield return new WaitForSeconds(0.1f);
        LockCursor();
        Debug.Log("Cursor should now be locked and invisible.");
    }

    private void LockCursor()
    {
        Cursor.visible = false;
        Cursor.lockState = CursorLockMode.Locked;
        Debug.Log("LockCursor called: Cursor.lockState=" + Cursor.lockState + ", Cursor.visible=" + Cursor.visible);
    }

    void LateUpdate() {
        Cursor.lockState = CursorLockMode.Locked;
        Cursor.visible = false;
    }

void OnApplicationFocus(bool hasFocus)
{
    if (hasFocus)
    {
        Cursor.lockState = CursorLockMode.Locked;
        Debug.Log("Application is focussed");
    }
    else
    {
        Cursor.lockState = CursorLockMode.None;
        Debug.Log("Application lost focus");
    }
}
}
