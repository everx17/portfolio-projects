using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    public float moveSpeed = 5f; 
    public float jumpForce = 10f; 
    public float gravity = 20f; 
    public Transform groundCheck; 
    public LayerMask groundLayer; 

    private CharacterController controller;
    private Vector3 moveDirection;
    private bool isGrounded;

    public bool isCrouching;
    public bool LeftArmLift;
    public bool RightArmLift;

    private Animator animator; 

    public float pushForce = 5f;

    void OnControllerColliderHit(ControllerColliderHit hit)
    {
        Rigidbody rb = hit.collider.attachedRigidbody;

        if (rb != null && !rb.isKinematic)
        {
            Vector3 direction = hit.transform.position - transform.position;
            direction.y = 0; 
            rb.AddForce(direction.normalized * pushForce, ForceMode.Impulse);
        }
    }


    private void Start()
    {
        controller = GetComponent<CharacterController>();
        animator = GetComponent<Animator>(); 
    }

    private void Update()
    {

        isCrouching = Input.GetKey(KeyCode.LeftControl);
        LeftArmLift = Input.GetKey(KeyCode.Q);
        RightArmLift = Input.GetKey(KeyCode.E);
        animator.SetBool("isCrouching", isCrouching);
        animator.SetBool("LeftArmLift", LeftArmLift);
        animator.SetBool("RightArmLift", RightArmLift);
        
        if(isCrouching) {
            moveSpeed = 2f;
            animator.SetTrigger("CrouchTrigger"); 
        } else {
            moveSpeed = 5f;
        }

        isGrounded = Physics.CheckSphere(groundCheck.position, 0.1f, groundLayer);

        float horizontalInput = Input.GetAxis("Horizontal");
        float verticalInput = Input.GetAxis("Vertical");
        Vector3 moveHorizontal = transform.right * horizontalInput;
        Vector3 moveVertical = transform.forward * verticalInput;
        moveDirection = moveHorizontal + moveVertical;
        moveDirection *= moveSpeed;

        bool isMoving = moveDirection.magnitude > 0.1f;

        animator.SetBool("isWalking", isMoving);

        if (isMoving)
        {
            animator.SetBool("isIdle", false); 
            animator.SetTrigger("WalkTrigger"); 
        }

        if (!isMoving)
        {
            animator.SetBool("isIdle", true); 
            animator.SetTrigger("IdleTrigger"); 
        }

        if (isGrounded)
        {
            moveDirection.y = 0f;
        }
        else
        {
            moveDirection.y -= gravity * Time.deltaTime;
        }
        if (isGrounded)
        {

            if (Input.GetKeyDown(KeyCode.Space))
            {
                Debug.Log("Jumping");
                moveDirection.y = jumpForce;
                animator.SetTrigger("JumpTrigger"); 
            }
        }
        controller.Move(moveDirection * Time.deltaTime);
    }
}
