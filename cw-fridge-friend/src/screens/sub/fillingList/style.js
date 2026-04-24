import { StyleSheet } from "react-native";
import { AppColors,AppFonts,AppIcons,normalized,normalizedFont } from "../../../utils/AppConstants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.primaryColor.darkWhite
    },
    body: {
        marginTop: normalized.hp('3%'),
        width: normalized.wp("95%"),
        alignSelf: 'center'
    },
    header: {
        flexDirection: "row",
        alignItems: 'center',
        top:normalized.hp('4.5%'),
        justifyContent: 'space-evenly',
    },
    crossIcon: {
        marginRight: 60,
    },
    checkIcon: {
        marginLeft: 60,  
    },    
    txtHeader: { 
        color: AppColors.primaryColor.darkBlack, 
        fontSize: AppFonts.commonFont.medium, 
        fontWeight: "700",
        textAlign: 'center',
    },
    searchView: { 
        width: normalized.wp('95%'), 
        margin: '4%', 
        flexDirection: 'row', 
        alignSelf: 'center', 
        backgroundColor: 'silver', 
        borderRadius: 50, 
        padding: '1%', 
        paddingHorizontal: normalized.wp("3%"), 
        marginTop:normalized.hp('7%'),
        borderColor: AppColors.primaryColor.darkBlack, 
        borderWidth: 1 
    },
    search: { 
        width: normalized.wp('80%'), 
        marginHorizontal: normalized.wp("2%"), 
        fontSize: AppFonts.commonFont.small, 
        color: AppColors.primaryColor.darkBlack 
    },
    imageFish: { 
        width: normalized.wp("40%"), 
        height: normalized.wp('40%'), 
        alignSelf: 'center' ,
        bottom:normalized.hp('2%')
    },
    txtSalmon: { 
        color: AppColors.primaryColor.darkBlack, 
        fontSize: AppFonts.commonFont.medium, 
        fontWeight: '700', 
        textAlign: 'center',
        bottom:normalized.hp('4%')
    
    },
    descriptionView: { 
        width: normalized.wp('90%'), 
        marginVertical: normalized.hp("3%"), 
        alignSelf: 'center', 
        borderWidth: 1, 
        borderColor: AppColors.primaryColor.darkBlack, 
        padding: "2%" ,
        bottom:normalized.hp('4%')
    },
    notesView: { 
        width: normalized.wp('90%'), 
        marginVertical: normalized.hp("3%"), 
        alignSelf: 'center', 
        borderWidth: 1, 
        borderColor: AppColors.primaryColor.darkBlack, 
        borderRadius: 15,
        padding: "2%" ,
        bottom:normalized.hp('4%')
    },
    txtTitle: { 
        color: AppColors.primaryColor.darkBlack, 
        fontSize: AppFonts.commonFont.small, 
        fontWeight: '600', 
        textAlign: 'center',
        bottom:normalized.hp('1%')
    },
    txtNotes: { 
        color: AppColors.primaryColor.darkBlack, 
        fontSize: AppFonts.commonFont.small, 
        fontWeight: '400', 
        textAlign: 'center' 
    },
    notesField: {
        width: normalized.wp("90%"), 
        alignSelf:'center', 
        borderWidth: 1, 
        borderColor: AppColors.primaryColor.darkBlack, 
        borderRadius: 20, 
        padding: "2%"
    },
})

export default styles