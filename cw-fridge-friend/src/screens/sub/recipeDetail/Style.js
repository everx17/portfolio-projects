import { AppColors, AppFonts, normalized, } from "../../../utils/AppConstants";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: AppColors.primaryColor.darkWhite,
    },
    body:{
        width: normalized.wp("90%"),
        alignSelf: 'center',
        marginTop: normalized.hp("3%")
    },
    image: {
        width: normalized.wp("90%"),
        height: normalized.hp("30%"),
        borderRadius: 30,
        marginTop: normalized.hp('3%')
    },
    titleView: { 
        backgroundColor: AppColors.primaryColor.darkWhite, 
        alignItems: 'center', 
        padding: "4%", 
        alignSelf: 'center', 
        marginTop: normalized.hp("-3.5%") 
    },
    txtTitle: { 
        color: AppColors.primaryColor.darkBlack, 
        fontSize: AppFonts.commonFont.medium, 
        fontWeight: 'bold' 
    },
    txtNutrition: { 
        color: AppColors.primaryColor.darkBlack, 
        fontSize: AppFonts.commonFont.small, 
        fontWeight: '700', 
        textAlign: 'center'
     },
     borderView: { 
        width: normalized.wp("80%"), 
        alignSelf: 'center', 
        borderColor: AppColors.primaryColor.darkBlack,
        borderWidth: 0.5,
        padding: "2%" 
    },
    txtDescription: { 
        color: AppColors.primaryColor.darkBlack, 
        textAlign: 'justify',
        fontSize: AppFonts.commonFont.small
    },
    txtHeading: { 
        color: AppColors.primaryColor.darkBlack, 
        fontSize: AppFonts.commonFont.small, 
        fontWeight: '700', 
        marginTop: normalized.hp("2%"), 
        marginBottom: normalized.hp('1%') 
    },
    txtMaterial:{
        color: AppColors.primaryColor.darkBlack,
        fontSize: AppFonts.commonFont.small
    },
    instructionGroupName: {
        fontSize: AppFonts.commonFont.large,
        fontWeight: 'bold',
        color: AppColors.primaryText,
    },
    stepContainer: {
        borderBottomWidth: 1,
        borderBottomColor: AppColors.borderLight,
        paddingVertical: 10,
    },
    stepNumber: {
        fontSize: AppFonts.commonFont.medium,
        fontWeight: '600',
        color: AppColors.primaryText,
    },
    stepText: {
        fontSize: AppFonts.commonFont.small,
        color: AppColors.secondaryText,
    },
})

export default styles