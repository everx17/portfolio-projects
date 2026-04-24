using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CatMessGenerate : MonoBehaviour
{
    public GameObject messPrefab;
    public float spawnInterval = 5f;
    public int maxSpawns = 10;
    private float timer;
    private int spawnCount = 0;
    void Start()
    {
        timer = spawnInterval;
    }
    void Update()
    {
        if (spawnCount >= maxSpawns)
        {
            return;
        }
        timer -= Time.deltaTime;
        if (timer <= 0f)
        {
            timer = spawnInterval;
            SpawnMess();
        }
    }
    void SpawnMess()
    {
        spawnCount++;
        Vector3 spawnPosition = transform.position - transform.forward;
        Instantiate(messPrefab, spawnPosition, Quaternion.identity);
    }
}
