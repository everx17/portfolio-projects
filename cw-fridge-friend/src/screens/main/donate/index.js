import { AppColors, AppFonts, normalized } from "../../../utils/AppConstants";
import { Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from "react";
import { dummyText, dummyText1 } from "../../../utils/CommonManager"

import AsyncStorage from "@react-native-async-storage/async-storage";
import { images } from "../../../assets/images";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";
import styles from "./Style";
import { useFocusEffect } from "@react-navigation/native";

const TrustCard = ({ image, name, description, bottomDescription }) => {
    return (
        <View style={styles.cardView}>
            <Image source={image} resizeMode='stretch' style={styles.img} />
            <View style={styles.txtView}>
                <Text style={styles.txtName}>{name}</Text>
                <Text style={styles.txtDescription}>{description}</Text>
                <Text style={styles.txtBtmdes}>{bottomDescription}</Text>
            </View>
        </View>
    )
}

export default function Donate({ navigation }) {
    const [userLocation, setUserLocation] = useState('');

    const fetchLocation = async () => {
        try {
            const location = await AsyncStorage.getItem('location');
            if (location) {
                setUserLocation(location);
            }
        } catch (error) {
            console.error("Error fetching location from AsyncStorage:", error);
        }
    };

    
    useFocusEffect(
        React.useCallback(() => {
            fetchLocation();
            return () => {};  // Return a cleanup function if needed
        }, [])
    );

    return (
        <ScrollView style={styles.container}>
            {
                userLocation === 'UK' ? (
                    <>
                        <View style={styles.body}>
                            <Text style={styles.txtFeed}>Feed a Heart</Text>
                            <Text style={styles.txtLocal}>Local Charities</Text>
                            {/* <Text> Trust Card </Text> */}
                            <TrustCard image={images.trussel} name={"The Trussel Trust"}
                                description={"The Trussell Trust is an NGO and charity that works to end the need for food banks in the United Kingdom. It is based on, shaped, and guided by Christian principles and supports a network of over 1,200 food bank centres to provide emergency food and compassionate, practical support to people in crisis, while campaigning for long-term change to the structural issues that lock people into poverty. Its main office is in Salisbury, England."}
                                bottomDescription={"http://waterloo.foodbank.org.uk"} />
                            <TrustCard image={images.britain} name={"Feeding Britain"}
                                description={"Feeding Britain is an award-winning charity with a vision of a UK where no one goes hungry. We support a national network of 77 regional and local anti-hunger partnerships comprising more than 600 frontline organisations – ranging from community centres and schools, to local authorities and social enterprises. By piloting innovative and effective new projects, and showing how severe or chronic food insecurity can be prevented, we are designing a road map for eliminating hunger from the communities we serve. By sharing this knowledge with others, and using it to work for systemic changes at a national level, we will ensure hunger becomes a thing of the past."}
                                bottomDescription={"https://feedingbritain.org"} />
                            <TrustCard image={images.fareShare} name={"Fare Share"}
                                description={"FareShare is a charity network established in 1994, which aims at relieving food poverty and reducing food waste in the United Kingdom. It does this by obtaining good quality surplus food from the food industry that would otherwise have gone to waste and sending it to frontline charities and community groups across the UK.FareShare works with all sectors of the supply chain: producers, manufacturers and retailers. A number of the major UK food retailers have encouraged their suppliers to work with FareShare to minimise food waste."}
                                bottomDescription={"https://fareshare.org.uk"} />
                        </View>
                    </>
                ) : (
                    <View style={styles.body}>
                    <Text style={styles.txtFeed}>
                        Currently, we don't have charities for this location.
                    </Text>
                    </View>
                )
            }
        </ScrollView>
    )
}