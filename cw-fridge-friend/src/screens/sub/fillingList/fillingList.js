import { AppColors, AppFonts, AppIcons, Entypo, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons, normalized } from "../../../utils/AppConstants";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from "react";

import { images } from '../../../assets/images/index';
import styles from "./style";

export default function FillingList({ navigation }) {
    const [toggle, setToggle] = useState(false);
    const [name, setName] = useState('toggle-switch-off-outline');
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState(""); // Added state for notes
    const dummyText = "Lorem ipsum dolor ..."; // Shortened for brevity

    const toggled = () => {
        setToggle(!toggle);
        {
            !toggle ? setName('toggle-switch-outline') : setName('toggle-switch-off-outline');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Entypo name="cross" size={AppFonts.commonFont.extraLarge} color={'red'} style={styles.crossIcon} />
                <Text style={styles.txtHeader}>Filling List</Text>
                <MaterialIcons name="check" size={AppFonts.commonFont.extraLarge} color={"green"} style={styles.checkIcon} />
            </View>
            <View style={styles.searchView}>
                <FontAwesome name="search" size={AppFonts.commonFont.mediumLarge} color={AppColors.primaryColor.darkWhite} />
                <TextInput
                    style={styles.search}
                    placeholder="Search"
                    placeholderTextColor={AppColors.secondaryColor.lightBlack}
                    value={search}
                    onChangeText={val => setSearch(val)}
                />
            </View>
            <ScrollView>
                <View style={styles.body}>
                    <Image
                        style={styles.imageFish}
                        source={images.fish}
                        resizeMode='contain' />
                    <Text style={styles.txtSalmon}>SALMON</Text>
                    <View style={styles.descriptionView}>
                        <Text style={styles.txtTitle}>Nutrition Data</Text>
                        <Text style={styles.txtNotes}>{dummyText}</Text>
                    </View>
                    <Text style={styles.txtTitle}>Notes:</Text>
                <View style={styles.notesView}>
                    <TextInput
                    style={styles.txtNotes}
                    placeholder="Add your notes here..."
                    value={notes}
                    onChangeText={val => setNotes(val)}
                    multiline={true} // for multiline input
                />
            </View>
                </View>
            </ScrollView>
        </View>
    )
}
