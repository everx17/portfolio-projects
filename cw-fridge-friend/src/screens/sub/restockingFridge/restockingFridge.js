import { Alert, Image, Keyboard, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AppColors, AppFonts, AppIcons, Entypo, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons, normalized } from "../../../utils/AppConstants";
import React, { useEffect, useRef, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from "react-native-dropdown-picker";
import IngredientDetails from "./ingredientDetails";
import { images } from '../../../assets/images/index';
import styles from "./style"

const SPOONACULAR_ENDPOINT = 'https://api.spoonacular.com/food/ingredients/search';
const SPOONACULAR_IMG = 'https://spoonacular.com/cdn/ingredients_250x250/'
const API_KEY = '5732f304cd4e45a5940f66d6741c9d67';

// import { dummyText, dummyText1 } from "../../../utils/CommonManager"

export default function RestockingFridge({ navigation }) {
    const [toggle, setToggle] = useState(false)
    const [name, setName] = useState('toggle-switch-off-outline')
    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState("")
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const defaultItems = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ];
    const [items, setItems] = useState(defaultItems);
    const [date, setDate] = useState(new Date())
    const [openDatePicker, setOpenDatePicker] = useState(false)
    const [autocompleteResults, setAutocompleteResults] = useState([]);
    const [isSearchFocused, setSearchFocused] = useState(false);
    const [selectedResult, setSelectedResult] = useState(null); // Currently selected result from autocomplete results
    const [ingredientDetails, setIngredientDetails] = useState(null); // Details of currently selected ingredient [name, image, description, etc.
    const [fetchedCategories, setFetchedCategories] = useState([]);
    const searchDebounceRef = useRef(null);
    const [showPicker, setShowPicker] = useState(false);

    const fetchIngredientDetails = async (ingredientId) => {
        try {
            let amount = 1;
            const response = await fetch(`https://api.spoonacular.com/food/ingredients/${ingredientId}/information?amount=${amount}&apiKey=${API_KEY}`);
            const data = await response.json();
            setIngredientDetails(data);

            const categoriesFromData = data.categoryPath || [];
            setFetchedCategories(categoriesFromData.map(cat => ({ label: cat, value: cat })));

            console.log("Ingredient details:", data);
        } catch (error) {
            console.error("Error fetching ingredient details:", error);
        }
    };

    const handleSelectResult = (result) => {
        console.log("Selected result:", result)
        setSearch(result.name);
        setSelectedResult(result);
    };

    const fetchAutocompleteResults = async (query) => {
        try {
            const response = await fetch(`${SPOONACULAR_ENDPOINT}?query=${query}&number=5&apiKey=${API_KEY}`, {
                timeout: 10 * 1000 // 10 seconds
            });
            const data = await response.json();
            setAutocompleteResults(data.results || []);
        } catch (error) {
            console.error("Error fetching autocomplete results:", error);
        }
    };

    const handleSearchChange = (val) => {
        setSearch(val);

        // Clear the previous timeout if it exists
        if (searchDebounceRef.current) {
            clearTimeout(searchDebounceRef.current);
        }

        // Set a new timeout
        searchDebounceRef.current = setTimeout(() => {
            if (val) {
                fetchAutocompleteResults(val);
            } else {
                setAutocompleteResults([]); // Clear results if input is empty
            }
        }, 500);  // 500 milliseconds delay. Adjust this value as needed.
    };

    // If the component is unmounted, clear any pending timeouts
    useEffect(() => {
        return () => {
            if (searchDebounceRef.current) {
                clearTimeout(searchDebounceRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (selectedResult && selectedResult.id) {
            fetchIngredientDetails(selectedResult.id);
        }
    }, [selectedResult]);

    useEffect(() => {
        if (fetchedCategories.length > 0) {
            setItems([...fetchedCategories, ...defaultItems]);
            setValue(fetchedCategories[0].value);  // Set the first fetched category as the default value
        }
    }, [fetchedCategories]);


    const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."

    const toggled = () => {
        setToggle(!toggle)

        {
            !toggle ? setName('toggle-switch-outline') : setName('toggle-switch-off-outline')
        }
    }

    const saveIngredientToAsyncStorage = async () => {
        try {
            const ingredient = {
                name: selectedResult?.name || "",
                id: selectedResult?.id || "",
                category: value || "",
                image: selectedResult ? `${SPOONACULAR_IMG}${selectedResult.image}` : "",
                expiryDate: date
            };

            let existingIngredients = await AsyncStorage.getItem('ingredients');
            if (existingIngredients) {
                existingIngredients = JSON.parse(existingIngredients);
            } else {
                existingIngredients = [];
            }

            existingIngredients.push(ingredient);

            await AsyncStorage.setItem('ingredients', JSON.stringify(existingIngredients));
            console.log("Ingredient saved!");
            Alert.alert("Ingredient saved!");

            // Redirect to another screen or give user feedback that the ingredient was saved
            navigation.navigate('Fridge');  // Change 'Fridge' to the name of the screen you want to navigate to

        } catch (error) {
            console.error("Error saving ingredient:", error);
        }
    };




    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Entypo
                    name="cross"
                    size={AppFonts.commonFont.extraLarge}
                    color={'red'}
                    style={styles.checkIcon}
                    onPress={() => navigation.navigate('Fridge')}
                />
                <Text style={styles.txtHeader}>Restocking Fridge</Text>
                {selectedResult && (
                    <MaterialIcons
                        name="check"
                        size={AppFonts.commonFont.extraLarge}
                        color={"green"}
                        style={styles.checkIcon}
                        onPress={() => saveIngredientToAsyncStorage()}
                    />
                )}
            </View>

            <View style={styles.searchView}>
                {/* <FontAwesome name="search" size={AppFonts.commonFont.mediumLarge} color={AppColors.primaryColor.darkWhite} /> */}
                <TextInput
                    style={styles.search}
                    placeholder="Search"
                    placeholderTextColor={AppColors.secondaryColor.lightBlack}
                    value={search}
                    onChangeText={handleSearchChange}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                />
                {/* Display autocomplete results */}
                {isSearchFocused && autocompleteResults.map(result => (
                    <TouchableOpacity key={result.id} onPress={() => handleSelectResult(result)}>
                        <Text>{result.name}</Text>
                        <Image
                            source={{ uri: `https://spoonacular.com/cdn/ingredients_100x100/${result.image}` }}
                            style={styles.searchResults}
                        />
                    </TouchableOpacity>
                ))}
            </View>
            <ScrollView >
                <View style={styles.body}>

                    <Image
                        style={styles.imageFish}
                        source={selectedResult ? { uri: `${SPOONACULAR_IMG}${selectedResult.image}` } : images.defaultImage}
                        resizeMode='contain'
                    />

                    <Text style={styles.txtSalmon}>{selectedResult ? selectedResult.name : "Select an ingredient"}</Text>

                    <View style={styles.descriptionView}>
                        <Text style={styles.txtTitle}>Ingredient Data</Text>
                        {ingredientDetails ? (
                            <IngredientDetails ingredient={ingredientDetails} />
                        ) : (
                            <Text>{dummyText}</Text>
                        )}
                    </View>
                    <View style={styles.reminder}>
                        <Text style={styles.txtNotes}>Expiration Reminder ?</Text>
                        <TouchableOpacity style={styles.toggleButton} onPress={() => toggled()}>
                            <MaterialCommunityIcons name={name} size={AppIcons.commonIcons.vXLarge} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.calendar} onPress={() => setShowPicker(true)}>
                            <MaterialCommunityIcons name="calendar-month-outline" size={AppIcons.commonIcons.large} style={styles.calendarIcon} />
                            <Text style={styles.calendarText}>{date.toLocaleDateString()}</Text>
                        </TouchableOpacity>

                        {showPicker && (
                            <DateTimePicker
                                value={date}
                                mode="date"
                                is24Hour={true}
                                display="default"
                                onChange={(event, selectedDate) => {
                                    setShowPicker(false);  // Hide the picker once a date is selected
                                    if (selectedDate) {
                                        setDate(selectedDate);  // Set the selected date
                                    }
                                }}
                            />
                        )}
                    </View>

                    <View style={{ marginTop: normalized.hp('1%'), marginBottom: normalized.hp('9%'), bottom: normalized.hp('5%') }}>
                        <Text style={styles.categoryText}>Category</Text>
                        <DropDownPicker
                            style={{ width: normalized.wp('88%'), alignSelf: 'center', top: normalized.hp('0.5%'), height: normalized.hp('3%'), borderRadius: 25 }}
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            placeholder=" "
                        />
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}