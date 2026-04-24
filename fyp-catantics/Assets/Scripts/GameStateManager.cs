using UnityEngine;

public class GameStateManager : MonoBehaviour
{
    public enum GameState
    {
        Ongoing,
        Won,
        Lost
    }
    public static GameState CurrentGameState = GameState.Ongoing;
    private GameState previousGameState = GameState.Ongoing;
    private AudioSource audioSource;
    public AudioClip winSound;
    public AudioClip failSound;

    void Start()
    {
        audioSource = GetComponent<AudioSource>();
        if (audioSource == null)
        {
            audioSource = gameObject.AddComponent<AudioSource>();
        }
        audioSource.volume = 1.0f;
    }

    public void PlaySound(AudioClip clip)
    {
        if (audioSource != null && clip != null)
        {
            audioSource.PlayOneShot(clip);
        }
    }

    public void CheckGameStateAndPlaySound()
    {
        if (CurrentGameState != previousGameState)
        {
            if (CurrentGameState == GameState.Won)
            {
                PlaySound(winSound);
            }
            else if (CurrentGameState == GameState.Lost)
            {
                PlaySound(failSound);
            }
            previousGameState = CurrentGameState;
        }
    }

    void Update()
    {
        CheckGameStateAndPlaySound();
    }
}
