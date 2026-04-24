import { AppColors, AppFonts, normalized } from "../../../utils/AppConstants";
import { Button, FlatList, RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import FlatLists from "../../../components/flatLists/FlatLists";
import { FridgeData } from "../../../utils/CommonManager";
import styles from "./Style";

const SPOONACULAR_ENDPOINT = 'https://api.spoonacular.com/food/ingredients/search';
const API_KEY = '5732f304cd4e45a5940f66d6741c9d67';

const fetchRecipes = async () => {
    try {
        // 1. Fetch ingredients from AsyncStorage
        const storedIngredients = await AsyncStorage.getItem('ingredients');
        
        if (!storedIngredients) {
            console.error("No ingredients found in AsyncStorage.");
            return [];
        }

        const ingredientsList = JSON.parse(storedIngredients);

        // 2. Format the ingredients for the API request
        const formattedIngredients = ingredientsList.map(ingredient => ingredient.name).join(',');

        // 3. Make the API request
        const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${formattedIngredients}&number=6&apiKey=${API_KEY}`);
        
        if (!response.ok) {
            console.error("API request failed:", response.statusText);
            return [];
        }

        const data = await response.json();

        // 4. Process the API response
        // For now, let's just return the data
        console.log("Recipes:", data)
        return data;
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return [];
    }
}


export default function Recipe({ navigation }) {
    const [recipes, setRecipes] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const handleFetchRecipes = async () => {
        setRefreshing(true);
        const fetchedRecipes = await fetchRecipes();
        
        const transformedRecipes = fetchedRecipes.map(recipe => ({
            id: recipe.id,
            image: { uri: recipe.image },
            title: recipe.title,
            ingredients: recipe.usedIngredientCount,
            totalIngredients: recipe.usedIngredientCount + recipe.missedIngredientCount,
        }));

        setRecipes(transformedRecipes);
        setRefreshing(false);
    };

    useEffect(() => {
        handleFetchRecipes();
    }, []);
    

    return (
        <View style={styles.container}>
            <Text style={styles.txtHungry}>Hungry?</Text>
            <Text style={styles.txtCook}>What Can we Cook?</Text>
            <Text style={styles.txtFridge}>Out of your fridge:</Text>

            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleFetchRecipes}
                    />
                }
            >
                <FlatList
                    data={recipes}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <FlatLists 
                            data={item} 
                            fridge={true} 
                            onPress={() => navigation.navigate("RecipeDetail", { item })}
                        />
                    )}
                />
            </ScrollView>
        </View>
    );
}
