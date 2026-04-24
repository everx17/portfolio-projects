using UnityEngine;
using UnityEngine.UI; // Required for UI elements manipulation
using UnityEngine.SceneManagement;
public class MainMenuScript : MonoBehaviour
{
    public RawImage storyImage; // Reference to the RawImage component
    private int currentImageIndex = 1; // Start with the first image

    public void PlayGame()
    {
        SceneManager.LoadScene("Story1");
    }
  public void PlayLevel1()
    {
        SceneManager.LoadScene("Story1");
    }
      public void PlayLevel2()
    {
        SceneManager.LoadScene("Story2");
    }
      public void PlayLevel3()
    {
        SceneManager.LoadScene("Story3");
    }
      public void PlayLevel4()
    {
        SceneManager.LoadScene("Story4");
    }
      public void PlayLevel5()
    {
        SceneManager.LoadScene("Story5");
    }
    public void OpenOptions()
    {
        SceneManager.LoadScene("Options");
    }

    public void AboutUs()
    {
        SceneManager.LoadScene("Aboutus");
    }

        public void Charities()
    {
        SceneManager.LoadScene("Charities");
    }

        public void Settings()
    {
        SceneManager.LoadScene("Settings");
    }
    public void TurnOffSound()
    {
        AudioListener.volume = 0;
        Debug.Log("Sound turned off");
    }

    public void TurnOnSound()
    {
        AudioListener.volume = 1;
        Debug.Log("Sound turned on");
    }

    public void QuitGame()
    {
        Debug.Log("Quit button clicked. Quitting the application.");
        Application.Quit();
    }

    public void Customise()
    {
        SceneManager.LoadScene("Customise");
    }

public void BackToMainMenu()
{
    if(currentImageIndex == 1)
    {
        SceneManager.LoadScene("MainMenu");
    }
    else
    {
        currentImageIndex--;
        Texture2D previousImage = Resources.Load<Texture2D>($"Story1/StoryImage{currentImageIndex}");
        storyImage.texture = previousImage;
    }
}

    public void Story1NextImage()
    {
        currentImageIndex++;

        Texture2D nextImage = Resources.Load<Texture2D>($"Story1/StoryImage{currentImageIndex}");

        if(nextImage != null)
        {
            storyImage.texture = nextImage;
        }
        else
        {
            Debug.Log(nextImage);
            Debug.Log("No more images available or check image naming/paths.");

            SceneManager.LoadScene("Level1_Garden");
        }
    }

    public void Story2NextImage()
    {
        currentImageIndex++;

        Texture2D nextImage = Resources.Load<Texture2D>($"Story2/StoryImage{currentImageIndex}");
        Debug.Log(nextImage);

        if(nextImage != null)
        {
            storyImage.texture = nextImage;
        }
        else
        {
            Debug.Log(nextImage);
            Debug.Log("No more images available or check image naming/paths.");

            SceneManager.LoadScene("Level2_LivingRoom");
        }
    }
        public void Story3NextImage()
    {
        currentImageIndex++;

        Texture2D nextImage = Resources.Load<Texture2D>($"Story3/StoryImage{currentImageIndex}");
        
        if(nextImage != null)
        {
            storyImage.texture = nextImage;
        }
        else
        {
            Debug.Log(nextImage);
            Debug.Log("No more images available or check image naming/paths.");

            SceneManager.LoadScene("Level3_Bathroom");
        }
    }
        public void Story4NextImage()
    {
        currentImageIndex++;

        Texture2D nextImage = Resources.Load<Texture2D>($"Story4/StoryImage{currentImageIndex}");

        if(nextImage != null)
        {
            storyImage.texture = nextImage;
        }
        else
        {
            Debug.Log(nextImage);
            Debug.Log("No more images available or check image naming/paths.");

            SceneManager.LoadScene("Level4_Bedroom");
        }
    }
        public void Story5NextImage()
    {
        currentImageIndex++;

        Texture2D nextImage = Resources.Load<Texture2D>($"Story5/StoryImage{currentImageIndex}");
        
        if(nextImage != null)
        {
            storyImage.texture = nextImage;
        }
        else
        {
            Debug.Log(nextImage);
            Debug.Log("No more images available or check image naming/paths.");

            SceneManager.LoadScene("Level5_Basement");
        }
    }

    public void StoryEnding()
    {
        SceneManager.LoadScene("Storyending");
    }

    public void StoryEndingNextImage()
    {
        currentImageIndex++;

        Texture2D nextImage = Resources.Load<Texture2D>($"Ending/StoryImage{currentImageIndex}");

        if(nextImage != null)
        {
            storyImage.texture = nextImage;
        }
        else
        {
            Debug.Log(nextImage);
            Debug.Log("No more images available or check image naming/paths.");

            SceneManager.LoadScene("MainMenu");
        }
    }
}