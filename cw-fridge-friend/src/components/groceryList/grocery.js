import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import { images } from '../../assets/images';
import styles from './styles';

const handleRemoveItem = async (id) => {
    try {
        // Fetch the existing ingredients
        const storedData = await AsyncStorage.getItem('ingredients');
        if (storedData) {
            const ingredients = JSON.parse(storedData);

            // Filter out the ingredient with the given id
            const updatedIngredients = ingredients.filter(item => item.id !== id);

            // Store the updated list
            await AsyncStorage.setItem('ingredients', JSON.stringify(updatedIngredients));
        }
    } catch (error) {
        console.error("Error removing item from AsyncStorage:", error);
    }
};


export const Grocery = (props) => {
    const { image, name, products } = props;
    return (
        <View style={styles.container}>


            {
                name === 'VEGETABLES' ? (
                    <View style={styles.iconContainer1}>
                        <Image source={image} style={styles.img} />
                        <Text style={styles.Text}>{name}</Text>
                    </View>
                ) : (
                    <View style={styles.iconContainer}>
                        <Image source={image} style={styles.img} />
                        <Text style={styles.Text}>{name}</Text>
                    </View>
                )
            }

            <View style={{ alignItems: 'center' }}>
                <FlatList
                    data={products}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.productContainer}>
                                <TouchableOpacity
                                    onPress={() => { console.log(item) }}
                                    onLongPress={() => {
                                        Alert.alert(
                                            "Remove Ingredient",
                                            "Are you sure you want to remove this ingredient?",
                                            [
                                                {
                                                    text: "Cancel",
                                                    style: "cancel"
                                                },
                                                {
                                                    text: "Remove",
                                                    onPress: () => handleRemoveItem(item.id)
                                                }
                                            ],
                                            { cancelable: false }
                                        );
                                    }}
                                >
                                    <Image source={{ uri: item?.img }} style={styles.productImg} />
                                    <Text style={styles.productName}>{item?.nam}</Text>
                                </TouchableOpacity>

                            </View>
                        )
                    }}
                />
            </View>
            <View style={styles.circlesContainer}>
                <View style={[styles.circles, { backgroundColor: 'black', borderColor: 'black' }]} ></View>
                <View style={[styles.circles, { backgroundColor: 'gray', borderColor: 'gray' }]} ></View>
                <View style={[styles.circles, { backgroundColor: 'gray', borderColor: 'gray' }]} ></View>
                <View style={[styles.circles, { backgroundColor: 'gray', borderColor: 'gray' }]} ></View>
            </View>

        </View>
    );
}




