using UnityEngine;

public class HandTriggerScript : MonoBehaviour
{
    public string targetTag = "Cat";
    private float contactTime = 0f;
    private bool isInContact = false;
    public float requiredContactTime = 1f;
    public GameObject gameWinPanel;

    private BroomEquipScript broomEquipScript;

    public int level; 

    private bool catSoaped = false; 
    private bool catShowered = false; 

    private bool catCarried = false;

    private bool catInBed = false;

    private bool circuitFixed = false;

    private bool isFixed = false;

    public GameObject catPrefab; 

    public GameObject originalCat; 

    private GameObject newCat; 

    private void Start()
    {
        GameObject broom = GameObject.Find("Adam03");
        if (broom != null)
        {
            broomEquipScript = broom.GetComponent<BroomEquipScript>();
        }
        Debug.Log($"Current Level: {level}");
        gameWinPanel.SetActive(false);
        AdjustBehaviorForLevel();
    }

    private void Update()
    {
        if (level == 2 && broomEquipScript.messesCleanedUp >= 3)
        {
            GameStateManager.CurrentGameState = GameStateManager.GameState.Won;
            gameWinPanel.SetActive(true); 
            return; 
        }
        else if (GameStateManager.CurrentGameState == GameStateManager.GameState.Ongoing && isInContact)
        {
            Debug.Log($"Level: {level}");
            if (LevelSpecificConditionsMet())
            {
                contactTime += Time.deltaTime;
                Debug.Log($"Sustained Contact: {contactTime}");

                if (contactTime >= requiredContactTime)
                {
                    Debug.Log(catSoaped);
                    Debug.Log($"Sustained contact for {requiredContactTime} second. Level-specific condition met!");
                    GameStateManager.CurrentGameState = GameStateManager.GameState.Won;
                    gameWinPanel.SetActive(true); 
                    ResetContactState(); 
                }
            }

            else if ((level == 4 || level == 5) && !catCarried)
            {
                contactTime += Time.deltaTime;
                Debug.Log($"Sustained Contact: {contactTime}");

                if (contactTime >= requiredContactTime)
                {
                    Debug.Log("Trying to carry the cat.");
                    Debug.Log($"Sustained contact for {requiredContactTime} second. Level-specific condition met!");
                    originalCat.SetActive(false);
                    newCat = Instantiate(catPrefab, transform.position, Quaternion.identity);
                    newCat.transform.parent = transform;
                    newCat.transform.localPosition = new Vector3(0, 0, 0);
                    newCat.transform.localRotation = Quaternion.identity;
                    catCarried = true;

                }
            }
            else if (level == 4 && catCarried && catInBed)
            {
                Debug.Log("MARKER: Cat is in bed");
                GameStateManager.CurrentGameState = GameStateManager.GameState.Won;
                gameWinPanel.SetActive(true); 
                ResetContactState(); 
            }
            else if (level == 5 && catCarried && catInBed)
            {
                Debug.Log("Cat is in carrier");
                newCat.SetActive(false);
                Destroy(newCat);
                Debug.Log(circuitFixed);
                ResetContactState(); 
            }
            else
            {
                if (level == 3)
                {
                    Debug.Log("State of catSoaped: " + catSoaped);
                    Debug.Log("State of catShowered: " + catShowered);
                    Debug.Log("Level 3: Cat must be soaped and showered to win.");
                }
                else if (level == 4)
                {
                    Debug.Log("Level 4: Cat must be caught and carried to bed to win.");
                }
                else if (level == 5)
                {
                    Debug.Log("Level 5: Cat must be taken to cat carrier then screwdriver interaction");
                }
                else
                {
                    Debug.Log("Level-specific conditions not met.");
                }
            }
        }
        else if (contactTime > 0 && !isInContact)
        {
            contactTime -= Time.deltaTime;
        }
    }

    private void ResetContactState()
    {
        contactTime = 0; 
        isInContact = false; 
    }
    private void OnTriggerEnter(Collider other)
    {
        Debug.Log($"Trigger entered with tag: {other.tag}");

        if (other.CompareTag(targetTag))
        {
            isInContact = true;
            Debug.Log("Hand has made contact.");
        }

        if (other.CompareTag("CatBed"))
        {
            Debug.Log("Trigger with CatBed entered.");
            if (catCarried && level == 4)
            {
                Debug.Log("Cat is in bed");
                catInBed = true;
                GameStateManager.CurrentGameState = GameStateManager.GameState.Won;
                gameWinPanel.SetActive(true); 
                ResetContactState(); 
            }
            else if (catCarried && level == 5)
            {
                Debug.Log("Cat is in carrier");
                catInBed = true;
                ResetContactState(); 
            }
            else
            {
                Debug.Log("CatBed entered but catCarried is false.");
            }
        }
    }

    private void OnTriggerExit(Collider other)
    {
        if (other.CompareTag(targetTag))
        {
            isInContact = false;
            Debug.Log("Lost contact.");
            contactTime = 0;
        }
    }

    private void AdjustBehaviorForLevel()
    {
        switch (level)
        {
            case 1:
                break;
            case 2:
                Debug.Log("Level 2: Broom must clean up 3 messes to win.");
                requiredContactTime = 1f; 
                broomEquipScript.messesCleanedUp = 0; 
                break;
            case 3:
                Debug.Log("Level 3: Cat must be soaped and showered to win.");
                catSoaped = false; 
                catShowered = false; 
                requiredContactTime = 0.5f; 
                break;
            case 4:
                Debug.Log("Level 4: Cat must be caught and carried to bed to win.");
                requiredContactTime = 1f; 
                catCarried = false; 
                break;
            case 5:
                Debug.Log("Level 5: Cat must be taken to cat carrier then screwdriver interaction");
                requiredContactTime = 1f; 
                catCarried = false; 
                catInBed = false;
                circuitFixed = false; 
                break;
            default:
                Debug.Log("Level not recognized, default settings applied.");
                break;
        }
    }

    private bool LevelSpecificConditionsMet()
    {
        if (level == 2)
        {
            return broomEquipScript.messesCleanedUp >= 3; 
        }
        else if (level == 3)
        {
            return catSoaped && catShowered; 
        }
        else if (level == 4)
        {
            return catInBed; 
        }
        else if (level == 5)
        {
            return catInBed && circuitFixed; 
        }

        return true; 
    }

    public void SetCatSoaped(bool state)
    {
        catSoaped = state;
        Debug.Log("SetCatSoaped: " + catSoaped);
    }

    public void SetCatShowered(bool state)
    {
        catShowered = state;
        Debug.Log("SetCatShowered: " + catShowered);
    }
    public bool getCatSoaped()
    {
        Debug.Log($"Cat Soaped: {catSoaped}");
        return catSoaped;
    }

    public bool getCatCarried()
    {
        Debug.Log($"Cat Carried: {catCarried}");
        return catCarried;
    }

    public void SetCatCarried(bool carried)
    {
        catCarried = carried;
        Debug.Log($"SetCatCarried called: {carried}");
    }

    public void SetCatInBed(bool inBed)
    {
        catInBed = inBed;
        Debug.Log($"SetCatInBed called: {inBed}");
    }

    public bool getCircuitFixed()
    {
        Debug.Log($"Circuit Fixed: {circuitFixed}");
        return circuitFixed;
    }

    public void SetCircuitFixed(bool isFixed)
    {
        circuitFixed = isFixed;
        Debug.Log($"SetCircuitFixed called: {isFixed}");
        gameWinPanel.SetActive(true); 
        GameStateManager.CurrentGameState = GameStateManager.GameState.Won;
    }

}
