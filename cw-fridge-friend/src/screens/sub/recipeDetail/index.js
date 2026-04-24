import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { AppColors, AppFonts, normalized } from "../../../utils/AppConstants";
import React, { useEffect, useState } from "react";
import { dummyText, dummyText1 } from "../../../utils/CommonManager";

import styles from "./Style";

const API_KEY = '5732f304cd4e45a5940f66d6741c9d67';

export default function RecipeDetail({ navigation, route }) {
    const { item } = route.params
    const [instructions, setInstructions] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        const fetchInstructions = async () => {
            try {
                const response = await fetch(`https://api.spoonacular.com/recipes/${item.id}/analyzedInstructions?apiKey=${API_KEY}`);
                const data = await response.json();
                if (Array.isArray(data)) {
                    setInstructions(data);
                    console.log(data)
                } else {
                    console.warn("Received non-array response from API");
                }
            } catch (error) {
                console.error("Error fetching recipe instructions:", error);
            }
            setLoading(false)
        };
    
        fetchInstructions();
    }, [item.id]);
    
    
    console.log("item", item)
    return (
        <ScrollView style={styles.body}>
            <View>
            <View style={styles.txtHeading}>
                <Text style={styles.txtTitle}>{item.title}</Text>
                <Image source={{ uri: item.image.uri }} style={styles.image} />
            </View>
                {
                loading ? (
                    <ActivityIndicator size="large" color={AppColors.primaryColor} />
                ) : (
                    instructions.map((instructionGroup, idx) => (
                        <View key={idx}>
                            <Text style={styles.instructionGroupName}>{instructionGroup.name}</Text>
                            {
                                instructionGroup.steps.map((step) => (
                                    <View key={step.number} style={styles.stepContainer}>
                                        <Text style={styles.stepNumber}>Step {step.number}</Text>
                                        <Text style={styles.stepText}>{step.step}</Text>
                                    </View>
                                ))
                            }
                        </View>
                    ))
                )
                }
            </View>
        </ScrollView>
    );
    
}