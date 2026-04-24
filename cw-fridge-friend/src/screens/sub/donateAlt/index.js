import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, Button } from 'react-native'
import styles from "./Style";
import { AppColors, AppFonts, normalized } from "../../../utils/AppConstants";
import { dummyText, dummyText1 } from "../../../utils/CommonManager"
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";


export default function DonateAlt({ navigation }) {
    const [area, setArea] = useState("")
    return (
        <ScrollView style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.txtFeed}>Feed a Heart</Text>
                <Text style={styles.txtLocal}>Local Charities</Text>
                <View style={styles.unforView}>
                    <Text style={styles.txtUnfor}>Unfortunately, we are unable to suggest charities around you at this time!</Text>
                </View>
                <Text style={styles.txtLet}>Let's us know your location and we will work to bring this service to your area soon</Text>
                <TextInput
                    style={styles.field}
                    placeholder="Enter your Area"
                    placeholderTextColor={AppColors.primaryColor.darkBlack}
                    value={area}
                    onChangeText={val => setArea(val)}
                />
                <TouchableOpacity
                    // onPress={() => navigation.navigate("Account")}
                    style={styles.btn}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}