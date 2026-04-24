import { StyleSheet } from "react-native";
import { AppColors, normalized, AppFonts,  } from "../../../utils/AppConstants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:AppColors.primaryColor.darkWhite
    },
    body:{
        marginTop: normalized.hp("3%"),
        width: normalized.wp("95%"),
        alignSelf: 'center'
    },
    txtFeed: { 
        fontSize: AppFonts.commonFont.medium, 
        fontWeight: '700', 
        color: AppColors.primaryColor.darkBlack, 
        marginBottom: normalized.hp("2%"),
        marginLeft: normalized.wp("2%")
    },
    txtLocal: { 
        fontSize: AppFonts.commonFont.smallest, 
        color: AppColors.primaryColor.darkBlack, 
        textAlign: 'center' 
    },
    unforView: { 
        width: normalized.wp("95%"), 
        height: normalized.hp("20%"), 
        alignSelf: 'center', 
        borderWidth: 0.5, 
        borderColor: AppColors.primaryColor.darkBlack, 
        alignItems:'center', 
        justifyContent:'center', 
        margin: "4%",  
    },
    txtUnfor: {
        width: normalized.wp("60%"),  
        fontSize: AppFonts.commonFont.medium, 
        color:AppColors.primaryColor.darkBlack 
    },
    txtLet: {
        width: normalized.wp("80%"), 
        fontSize: AppFonts.commonFont.small, 
        textAlign:'center',
        alignSelf:'center', 
        color:AppColors.primaryColor.darkBlack
     },
    field: { 
        width: "90%", 
        alignSelf:'center', 
        backgroundColor:'silver', 
        borderRadius:50, 
        padding: "2%", 
        margin:'4%', 
        paddingHorizontal: normalized.wp('4%'), 
        color: AppColors.primaryColor.darkBlack
    },
    btn: {
        width: normalized.wp("30%"), 
        alignSelf:'center', 
        marginBottom: normalized.hp('2%'), 
        borderRadius: 20, 
        borderWidth: 1, 
        borderColor: AppColors.primaryColor.darkBlack, 
        justifyContent:'center', 
        alignItems:'center', 
        padding: "2%"
    },
    txtBtn: {
        color: AppColors.primaryColor.darkBlack
    },
    cardView: { 
        width: normalized.wp("95%"), 
        alignSelf: 'center', 
        flexDirection: 'row', 
        borderWidth: 0.5, 
        borderColor: AppColors.primaryColor.darkBlack, 
        alignItems: 'center', 
        margin: "4%", 
        padding: "2%" 
    },
    img: { 
        width: normalized.wp("30%"), 
        height: normalized.wp("30%"), 
        backgroundColor: 'silver', 
    },
    txtView: { 
        width: normalized.wp("60%") 
    },
    txtName: { 
        textAlign: 'center', 
        fontSize: AppFonts.commonFont.medium, 
        fontWeight: '700' 
    },
    txtDescription: { 
        fontSize: AppFonts.commonFont.smallest, 
        marginLeft: normalized.wp('1%') 
    },
    txtBtmdes: { 
        textAlign: 'center', 
        fontSize: AppFonts.commonFont.smallest, 
        marginVertical: normalized.hp("2%") 
    },
})

export default styles