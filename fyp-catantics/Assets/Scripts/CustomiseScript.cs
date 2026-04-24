using UnityEngine;

public class CustomiseScript : MonoBehaviour
{
    public GameObject[] cats;
    private int currentIndex = 0;
    void Start()
    {
        foreach (GameObject cat in cats)
        {
            cat.SetActive(false);
        }
        if (cats.Length > 0)
        {
            cats[currentIndex].SetActive(true);
        }
    }
    public void ShowNextCat()
    {
        cats[currentIndex].SetActive(false);
        currentIndex = (currentIndex + 1) % cats.Length;
        cats[currentIndex].SetActive(true);
    }
    public void ShowPreviousCat()
    {
        cats[currentIndex].SetActive(false);
        currentIndex--;
        if (currentIndex < 0)
        {
            currentIndex = cats.Length - 1;
        }
        cats[currentIndex].SetActive(true);
    }
}
