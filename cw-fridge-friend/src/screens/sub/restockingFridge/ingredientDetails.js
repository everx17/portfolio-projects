import { Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const IngredientDetails = ({ ingredient }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.ingredientName}>{ingredient.name}</Text>
            <Text style={styles.ingredientCategory}>{ingredient.categoryPath.join(', ')}</Text>
            
            <View style={styles.nutritionContainer}>
                <Text style={styles.nutritionHeader}>Nutritional Information:</Text>
                
                {ingredient.nutrition.nutrients.map((nutrient) => (
                    <View style={styles.nutrientRow} key={nutrient.name}>
                        <Text style={styles.nutrientName}>{nutrient.name}</Text>
                        <Text style={styles.nutrientAmount}>{nutrient.amount} {nutrient.unit}</Text>
                    </View>
                ))}
            </View>
            
            <Text style={styles.consistency}>Consistency: {ingredient.consistency}</Text>
            <Text style={styles.aisle}>Aisle: {ingredient.aisle}</Text>
            <Text style={styles.cost}>Estimated Cost: ${ingredient.estimatedCost.value / 100}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
    },
    ingredientImage: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 16,
    },
    ingredientName: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    ingredientCategory: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 16,
    },
    nutritionContainer: {
        marginTop: 16,
    },
    nutritionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    nutrientRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    nutrientName: {
        fontSize: 16,
    },
    nutrientAmount: {
        fontSize: 16,
    },
    nutrientDailyNeeds: {
        fontSize: 14,
        color: 'gray',
    },
    consistency: {
        fontSize: 16,
        marginTop: 16,
    },
    aisle: {
        fontSize: 16,
        marginTop: 8,
    },
    cost: {
        fontSize: 16,
        marginTop: 8,
    },
});

export default IngredientDetails;
