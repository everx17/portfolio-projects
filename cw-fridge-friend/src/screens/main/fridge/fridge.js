import { AppColors, AppIcons, Ionicons, normalized } from '../../../utils/AppConstants';
import { Image, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Grocery } from '../../../components/groceryList/grocery'
import React from 'react';
import { images } from '../../../assets/images';
import styles from './styles';

const getItemsExpiringOrExpired = (data) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // Set to start of the day
    const twoDaysFromNow = new Date(today);
    twoDaysFromNow.setDate(twoDaysFromNow.getDate() + 2);

    return data.filter(item => {
        const expiryDate = new Date(item.expiryDate);
        expiryDate.setHours(0, 0, 0, 0);  // Consider only the date portion for comparison
        return expiryDate <= twoDaysFromNow;
    });
};


export default function Fridge({ navigation }) {
    const [fridgeData, setFridgeData] = useState([]);
    const [transformedData, setTransformedData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [itemsExpiringSoon, setItemsExpiringSoon] = useState([]);

    const handleRefresh = async () => {
        console.log("Refreshing data...")
        setRefreshing(true);
        await fetchData();
        setRefreshing(false);
    };
    const fetchData = async () => {
        try {
            const storedData = await AsyncStorage.getItem('ingredients');
            console.log("Stored data:", storedData)
            if (storedData) {
                setFridgeData(JSON.parse(storedData));
                setTransformedData(transformData(JSON.parse(storedData)))
                // console.log("Transformed data:", transformedData)
                // console.log('cat')
            }
        } catch (error) {
            console.error("Error fetching data from AsyncStorage:", error);
        } finally {
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setTransformedData(transformData(fridgeData));
        setItemsExpiringSoon(getItemsExpiringOrExpired(fridgeData));
    }, [fridgeData]);

    const transformExpiringData = (data) => {
        const expiringItems = getItemsExpiringOrExpired(data);
        
        return {
            image: images.warning,  // Replace with the image you want for expiring items
            name: 'Expiring',
            products: expiringItems.map(item => ({
                id: item.id,
                img: item.image,
                nam: item.name
            }))
        };
    };    

    const expiringData = transformExpiringData(fridgeData);

    // This mapping defines each category's display name and associated image.
    const categoriesConfig = {
        'dairy': { displayName: 'DAIRY', image: images.dairy },
        'vegetable': { displayName: 'VEGETABLES', image: images.vegetables },
        'fruit': { displayName: 'FRUITS', image: images.fruits },
        'grain': { displayName: 'GRAIN', image: images.grains },
        'protein': { displayName: 'PROTEIN', image: images.protein },
        'default': { displayName: 'OTHER', image: images.defaultImage }
    };

    // This mapping determines which category a given item should fall under.
    const itemToCategoryMap = {
        'milk': 'dairy',
        'beef': 'protein',
        'salmon': 'protein',
        'red meat': 'protein',
        'fish': 'protein',
        'grains': 'grain',
        'rice': 'grain',
        // ... add more items as needed
    };

    const transformData = (data) => {
        const categories = {};

        data.forEach(item => {
            const categoryKey = itemToCategoryMap[item.category.toLowerCase()] || item.category;
            const categoryConfig = categoriesConfig[categoryKey] || categoriesConfig.default;

            if (!categories[categoryKey]) {
                categories[categoryKey] = {
                    image: categoryConfig.image,
                    name: categoryConfig.displayName,
                    products: []
                };
            }

            categories[categoryKey].products.push({
                id: item.id,
                img: item.image,
                nam: item.name
            });
        });

        return Object.values(categories);
    };

    const ExpiringSoon = ({ items }) => {
        return (
            <View style={styles.expiringContainer}>
                <Grocery image={expiringData.image} name={expiringData.name} products={expiringData.products} />
            </View>
        );
    };



    return (

        <SafeAreaView style={styles.container}>

            <Text style={styles.txtHello}>
                {/* HELLO USER */}
            </Text>
            <View style={styles.topView}>
                <Text style={styles.txtFridge}>WHAT'S IN YOUR FRIDGE?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('RestockingFridge')}>
                    <Ionicons
                        name='add-circle-outline'
                        color={AppColors.primaryColor.darkBlack}
                        size={AppIcons.commonIcons.vXLarge}
                        style={styles.topIcon}
                    />
                </TouchableOpacity>

            </View>
            <ScrollView
                style={{ marginTop: normalized.hp('2%'), marginBottom: normalized.hp('4%') }}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
                }
            >

                {/* <Grocery image={images.dairy} name={'DAIRY'} products={Array[0]} />
            <Grocery image={images.vegetables} name={'VEGETABLES'} products={Array[1]} />
            <Grocery image={images.fruits} name={'FRUITS'} products={Array[2]} />
            <Grocery image={images.grains} name={'GRAIN'} products={Array[3]} />
            <Grocery image={images.protein} name={'PROTEIN'} products={Array[4]} />
            <Grocery image={images.spices} name={'SPICES'} products={Array[5]} /> */}
                <ExpiringSoon items={itemsExpiringSoon} />
                {transformedData.map((category, index) => (
                    <Grocery key={index} image={category.image} name={category.name} products={category.products} />
                ))}

            </ScrollView>

        </SafeAreaView>
    );
}




