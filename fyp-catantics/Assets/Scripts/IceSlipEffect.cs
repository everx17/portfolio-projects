using UnityEngine;

public class IceSlipEffect : MonoBehaviour
{
    public float acceleration = 2.0f;
    public float maxSpeed = 5.0f;
    public float slipFactor = 0.95f;
    public float slipDistanceMultiplier = 1.0f;
    public Transform cameraTransform;
    private Rigidbody rb;
    private Vector3 movementInput;
    private Vector3 currentVelocity;
    private bool isMoving;
    private bool isWalking;
    private float slippedDistance;
    private Vector3 lastPosition;
    private float slipDistance;
    private Animator animator;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
        if (rb == null)
        {
            Debug.LogError("Rigidbody component is required for slippery movement.");
            return;
        }
        animator = GetComponent<Animator>();
        rb.isKinematic = false;
        rb.useGravity = true;
        lastPosition = transform.position;
        rb.constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationZ;
    }

    void Update()
    {
        float horizontal = Input.GetAxis("Horizontal");
        float vertical = Input.GetAxis("Vertical");
        Vector3 forward = cameraTransform.forward;
        Vector3 right = cameraTransform.right;
        forward.y = 0;
        right.y = 0;
        movementInput = (forward * vertical + right * horizontal).normalized;
        float movementSpeed = currentVelocity.magnitude / maxSpeed;
        animator.SetFloat("MoveSpeed", movementSpeed);
        isMoving = movementInput.magnitude > 0;
        slipDistance = maxSpeed * slipDistanceMultiplier;
        isWalking = isMoving && currentVelocity.magnitude > 0;
        animator.SetBool("IsWalking", isWalking);
    }

    void FixedUpdate()
    {
        if (isMoving)
        {
            Vector3 targetVelocity = movementInput * maxSpeed;
            currentVelocity = Vector3.MoveTowards(currentVelocity, targetVelocity, acceleration * Time.fixedDeltaTime);
            rb.MovePosition(rb.position + currentVelocity * Time.fixedDeltaTime);
            slippedDistance = 0;
        }
        else if (slippedDistance < slipDistance)
        {
            currentVelocity = new Vector3(currentVelocity.x * slipFactor, 0, currentVelocity.z * slipFactor);
            rb.MovePosition(rb.position + currentVelocity * Time.fixedDeltaTime);
            slippedDistance += Vector3.Distance(transform.position, lastPosition);
        }
        else
        {
            currentVelocity = Vector3.zero;
        }
        lastPosition = transform.position;
    }
}
