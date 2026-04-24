using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CatPhysicsScript : MonoBehaviour
{
    public float pushForce = 2f;
    void OnCollisionEnter(Collision other)
    {
        Debug.Log($"Collision detected with {other.gameObject.name}");
        Rigidbody rb = other.collider.GetComponent<Rigidbody>();
        if (rb != null && !rb.isKinematic)
        {
            Vector3 direction = other.transform.position - transform.position;
            direction.y = 0;
            rb.AddForce(direction.normalized * pushForce, ForceMode.Impulse);
        }
    }
    void Start()
    {
    }
    void Update()
    {
    }
}
