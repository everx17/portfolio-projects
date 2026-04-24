import { AppColors, AppFonts, normalized, } from "../../../utils/AppConstants";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: AppColors.primaryColor.darkWhite,
    },
    body:{
        marginTop: normalized.hp("3%"),
    },
    profileView: { 
        alignItems: 'center', 
        marginTop: normalized.hp("7%"), 
        marginBottom: normalized.hp('3%') 
    },
    txtName: { 
        color: AppColors.primaryColor.darkBlack, 
        fontSize: AppFonts.commonFont.large, 
        fontWeight: '700' 
    },
    txtLocation: { 
        color: AppColors.primaryColor.darkBlack, 
        fontSize: AppFonts.commonFont.small 
    },
    editView: { 
        backgroundColor: AppColors.radiantColor.umber, 
        paddingVertical: '1%', 
        paddingHorizontal: normalized.wp("2%"), 
        borderRadius: 50 
    },
    menuView: { 
        width: normalized.wp('95%'), 
        height: normalized.hp("8%"), 
        alignSelf: 'center', 
        borderRadius: 50, 
        backgroundColor: AppColors.radiantColor.umber, 
        padding: "2%", 
        paddingLeft: normalized.wp('5%'), 
        flexDirection: 'row', 
        marginVertical: normalized.hp('2%'), 
        alignItems: 'center' 
    },
    backupView: { 
        marginLeft: normalized.wp('10%') 
    },
    txtTitle: { 
        color: AppColors.primaryColor.darkBlack, 
        fontSize: AppFonts.commonFont.large 
    },
    txtSubtitle: { 
        color: AppColors.primaryColor.darkBlack, 
        fontSize: AppFonts.commonFont.smallest 
    },
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040',  // Semi-transparent background
    }
    
})

export default styles