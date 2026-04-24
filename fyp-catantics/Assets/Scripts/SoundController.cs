using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class SoundController : MonoBehaviour
{
    public AudioClip backgroundMusicClip;
    public AudioClip selectionSoundClip;

    private AudioSource backgroundMusicSource;
    private AudioSource selectionSoundSource;

    void Start()
    {
        GameObject backgroundMusicObject = new GameObject("BackgroundMusic");
        backgroundMusicSource = backgroundMusicObject.AddComponent<AudioSource>();
        backgroundMusicSource.clip = backgroundMusicClip;
        backgroundMusicSource.loop = true;
        backgroundMusicSource.playOnAwake = true;
        backgroundMusicSource.volume = 0.3f;
        backgroundMusicSource.Play();

        selectionSoundSource = gameObject.AddComponent<AudioSource>();
        selectionSoundSource.clip = selectionSoundClip;
        selectionSoundSource.playOnAwake = false;
        selectionSoundSource.volume = 7f;
    }

    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            selectionSoundSource.PlayOneShot(selectionSoundClip);
        }
    }

    private void OnSceneLoaded(Scene scene, LoadSceneMode mode)
    {
        backgroundMusicSource.Stop();
    }

    private void OnDestroy()
    {
        SceneManager.sceneLoaded -= OnSceneLoaded;
    }
}
