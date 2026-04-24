using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class StableCameraFollow : MonoBehaviour
{
    public Transform target;
    public Vector3 offset;
    public LayerMask collisionLayers;
    public float collisionBuffer = 0.2f;

    private void LateUpdate()
    {
        Vector3 desiredPosition = target.position + offset;
        Vector3 correctedPosition = desiredPosition;

        if (Physics.Linecast(target.position, desiredPosition, out RaycastHit hit, collisionLayers))
        {
            correctedPosition = hit.point - (transform.forward * collisionBuffer);
        }

        transform.position = correctedPosition;
        Vector3 lookTarget = target.position;
        lookTarget.y += 1f;
        transform.LookAt(target);
    }
}
