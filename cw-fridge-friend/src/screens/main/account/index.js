import { ActivityIndicator, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { AppColors, AppFonts, Entypo, Feather, FontAwesome, FontAwesome5, Ionicons, MaterialIcons, normalized } from "../../../utils/AppConstants";
import React, { useEffect, useState } from "react";
import {doc, getDoc, setDoc} from "firebase/firestore";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { fireStore } from "../../../utils/Firebase";
import { firebaseAuth } from "../../../utils/Firebase";
import { images } from "../../../assets/images";
import styles from "./Styles";

export default function Account({ navigation }) {
    const [email, setEmail] = useState('')
    const [location, setLocation] = useState('Unset');
    const [isModalVisible, setModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [lastBackupDate, setLastBackupDate] = useState(null);
    
    const backupToCloud = async () => {
        setIsLoading(true);
        try {
            const userId = firebaseAuth.currentUser.uid;
            const userData = await AsyncStorage.getItem('ingredients');
        
            if (userData) {
                const currentDate = new Date().toISOString();  // Store the current date and time in ISO format
                const dataToSave = { 
                    ingredientsList: userData,
                    lastBackupDate: currentDate
                };
        
                await setDoc(doc(fireStore, "ingredients", userId), dataToSave);
                setLastBackupDate(currentDate);  // Update the state with the current date
                console.log("Backup successful!");
            } else {
                console.warn("No data found in AsyncStorage to backup.");
            }
        } catch (error) {
            console.error("Error backing up data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const fetchBackupDate = async () => {
            try {
                const userId = firebaseAuth.currentUser.uid;
                const userDoc = await getDoc(doc(fireStore, "ingredients", userId));
                if (userDoc.exists()) {
                    setLastBackupDate(userDoc.data().lastBackupDate);
                }
            } catch (error) {
                console.error("Error fetching backup date:", error);
            }
        };
    
        fetchBackupDate();
    }, []);
    
    const restoreFromCloud = async () => {
        setIsLoading(true);
        try {
            const userId = firebaseAuth.currentUser.uid;
            const userDoc = await getDoc(doc(fireStore, "ingredients", userId));
    
            if (userDoc.exists()) {
                const restoredData = userDoc.data().ingredientsList;
                if (restoredData) {
                    await AsyncStorage.setItem('ingredients', restoredData);
                    console.log("Data restored successfully!");
                } else {
                    console.warn("No data found in Firestore to restore.");
                }
            } else {
                console.warn("User document does not exist in Firestore.");
            }
        } catch (error) {
            console.error("Error restoring data:", error);
        } finally {
            setIsLoading(false);
        }
    };
    
    

    useEffect(() => {
        setEmail(firebaseAuth.currentUser.email);
        fetchLocation();
    }, []);

    const fetchLocation = async () => {
        try {
            const storedLocation = await AsyncStorage.getItem('location');
            if (storedLocation) {
                setLocation(storedLocation);
            }
        } catch (error) {
            console.error("Error fetching location from AsyncStorage:", error);
        }
    };

    useEffect(() => {
        setEmail(firebaseAuth.currentUser.email)
    }, [])
    return (
        <ScrollView style={styles.container}>
                    {isLoading && (
            <Modal transparent={true} animationType="none">
                <View style={styles.modalBackground}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            </Modal>
        )}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                    setModalVisible(!isModalVisible);
                }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: 300, height: 300, backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                        <Text>Select your location:</Text>
                        <Picker
                            selectedValue={location}
                            onValueChange={async (itemValue) => {
                                setLocation(itemValue);
                                await AsyncStorage.setItem('location', itemValue);
                                setModalVisible(false);  // close modal after selection
                            }}
                        >
                            <Picker.Item label="Unset" value="Unset" />
                            <Picker.Item label="Singapore" value="Singapore" />
                            <Picker.Item label="UK" value="UK" />
                            {/* Add other locations as required */}
                        </Picker>
                    </View>
                </View>
            </Modal>

            <View style={styles.body}>

                {/* Profile */}
                <View style={styles.profileView}>
                    <Image source={images.profilePic} style={{ width: 80, height: 80 }} />
                    <Text style={styles.txtName}>{email}</Text>
                    <Text style={styles.txtLocation}>Location: {location}</Text>
                </View>


                <TouchableOpacity style={styles.menuView} onPress={()=> backupToCloud()}>
                    <FontAwesome name="book" size={AppFonts.commonFont.large} color={AppColors.radiantColor.flame} />
                    <View style={styles.backupView}>
                        <Text style={styles.txtTitle}>Backup to Cloud</Text>
                        <Text style={styles.txtSubtitle}>Last BackUp : {lastBackupDate ? new Date(lastBackupDate).toLocaleDateString() : "Not available"}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuView} onPress={()=> restoreFromCloud()}>
                    <FontAwesome5 name="cloud-download-alt" size={AppFonts.commonFont.large} color={AppColors.radiantColor.flame} />
                    <View style={styles.backupView}>
                        <Text style={styles.txtTitle}>Restore from Cloud</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuView} onPress={() => setModalVisible(true)}>
                    <Entypo name="globe" size={AppFonts.commonFont.large} color={AppColors.radiantColor.flame} />
                    <Text style={{ ...styles.txtTitle, marginLeft: normalized.wp("10%") }}>Country / Location</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuView} onPress={() => navigation.navigate("Login")}>
                    <Feather name="log-out" size={AppFonts.commonFont.large} color={AppColors.radiantColor.flame} />
                    <Text style={{ ...styles.txtTitle, marginLeft: normalized.wp("10%") }}>Logout</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}