import { AppColors, AppFonts, normalized, } from "../../../utils/AppConstants";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: normalized.hp("1%"),
        width: normalized.wp("95%"),
        alignSelf:'center',
        marginLeft: normalized.wp("4%")
    },
    txtHungry: {
        color: AppColors.primaryColor.darkBlack, 
        fontSize:AppFonts.commonFont.smallmedium, 
        fontWeight:'600',
        marginTop: normalized.hp("3%"),
        marginBottom: normalized.hp("-1%"),
        marginLeft: normalized.wp("0.5%"),
    },
    txtCook: {
        color: AppColors.primaryColor.darkBlack, 
        fontSize:AppFonts.commonFont.large, 
        fontWeight:'800',
        marginTop: normalized.hp("0.5%")
    },
    txtFridge: {
        color: AppColors.primaryColor.darkBlack, 
        fontSize:AppFonts.commonFont.smallest, },
        marginLeft: normalized.wp("0.5%"),
})

export default styles