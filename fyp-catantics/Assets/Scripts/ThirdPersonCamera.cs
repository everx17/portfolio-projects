using UnityEngine;

public class ThirdPersonCamera : MonoBehaviour
{
    public Transform target;
    public float rotationSpeed = 1f;

    public float distance = 5f;
    public float height = 2f;
    public float offsetX = 0f;
    public float offsetY = 0f;

    private void LateUpdate()
    {
        if (target == null)
            return;

        Vector3 targetPosition = target.position + Vector3.up * height;
        Vector3 cameraPosition = targetPosition - target.forward * distance + target.right * offsetX + target.up * offsetY;

        transform.position = cameraPosition;
        transform.LookAt(target.position + Vector3.up * height);
    }
}
