using UnityEngine;
using UnityEngine.UI;
using TMPro;
using UnityEngine.SceneManagement;

public class TimerScript : MonoBehaviour
{
    public float timeRemaining = 30;
    public bool timerIsRunning = false;
    public TMP_Text timeText;
    public GameObject gameLosePanel;
    public Button tryAgainButton;
    public AudioClip loseSound;
    private AudioSource audioSource;

    private void Start()
    {
        timerIsRunning = true;
        gameLosePanel.SetActive(false);
        tryAgainButton.onClick.AddListener(ReloadScene);

        audioSource = GetComponent<AudioSource>();
        if (audioSource == null)
        {
            audioSource = gameObject.AddComponent<AudioSource>();
        }
    }

    private void Update()
    {
        if (timerIsRunning && GameStateManager.CurrentGameState == GameStateManager.GameState.Ongoing)
        {
            if (timeRemaining > 0)
            {
                timeRemaining -= Time.deltaTime;
                DisplayTime(timeRemaining);
            }
            else
            {
                Debug.Log("Time has run out!");
                GameStateManager.CurrentGameState = GameStateManager.GameState.Lost;
                timeRemaining = 0;
                timerIsRunning = false;
                ShowGameLosePanel();
                PlayLoseSound();
            }
        }
    }

    void DisplayTime(float timeToDisplay)
    {
        timeToDisplay += 1;
        float minutes = Mathf.FloorToInt(timeToDisplay / 60);
        float seconds = Mathf.FloorToInt(timeToDisplay % 60);
        timeText.text = string.Format("{0:00}:{1:00}", minutes, seconds);
    }

    private void ShowGameLosePanel()
    {
        gameLosePanel.SetActive(true);
    }

    private void ReloadScene()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
        GameStateManager.CurrentGameState = GameStateManager.GameState.Ongoing;
    }
    private void PlayLoseSound()
    {
        if (loseSound != null)
        {
            audioSource.PlayOneShot(loseSound);
        }
    }

    public void AddTime(float timeToAdd)
    {
        timeRemaining += timeToAdd;
    }
}
