using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BouncyEffect : MonoBehaviour
{
    public float bounceHeight = 2.0f; 

    private Rigidbody rb;
    private bool justBounced = false;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
        if (rb == null)
        {
            Debug.LogError("Rigidbody component is required for the bounce effect.");
            return;
        }

        rb.freezeRotation = true;
    }

    void FixedUpdate()
    {
        if (justBounced)
        {
            rb.velocity = new Vector3(rb.velocity.x, Mathf.Sqrt(2 * Physics.gravity.magnitude * bounceHeight), rb.velocity.z);
            justBounced = false;
        }
    }

    void OnCollisionEnter(Collision collision)
    {
        if (collision.contacts[0].normal.y > 0.5)
        {
            justBounced = true;
        }
    }
}
