import { StyleSheet } from "react-native";
import { AppColors, AppFonts, normalized } from "../../utils/AppConstants";

const styles = StyleSheet.create({
  wrapItemName: {
    backgroundColor: AppColors.secondaryColor.shadedBlack,
    borderRadius: 0,
    height: normalized.hp("6%"),
    margin: normalized.wp("1%"),
    padding: normalized.wp("3%"),
    alignItems: "center",
    justifyContent: "center",
  },
  nameItem: {
    color: AppColors.primaryColor.darkWhite,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "600",
  },
  wrapHeader: {
    backgroundColor: AppColors.secondaryColor.shadedBlack,
    padding: normalized.wp("2%"),
  },
  wrapWriter: {
    backgroundColor: AppColors.secondaryColor.lightBlack,
    height: normalized.hp("4%"),
    alignItems: "center",
    justifyContent: "center",
  },
  txtHeader: {
    color: AppColors.primaryColor.darkWhite,
    fontSize: AppFonts.commonFont.small,
    textAlign: "center",
  },
  txtWriter: {
    color: AppColors.secondaryColor.darkBlue,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "500",
  },
  btnWrapCopy: {
    backgroundColor: AppColors.secondaryColor.shadedBlack,
    // alignSelf: 'flex-end',
    // marginTop: normalized.hp('2%'),
    padding: normalized.hp("1%"),
  },
  wrapTwoBtn: {
    flexDirection: "row",
    marginTop: normalized.hp("2%"),
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: AppColors.secondaryColor.shadedBlack,
    paddingHorizontal: normalized.wp("5%"),
    borderBottomWidth: 1,
  },

  // Fridge Item Flatlist
  mainView: { 
    flexDirection: 'row', 
    marginVertical: normalized.hp("2%") 
  },
  image: { 
    width: normalized.wp("35%"), 
    height: normalized.wp("20%"),
    borderRadius: 20 
  },
  infoMainView: { 
    width: normalized.wp("60%"), 
    alignItems: 'center', 
    padding: '2%' 
  },
  txtHeading: {
    color: AppColors.primaryColor.darkBlack, 
    fontSize:AppFonts.commonFont.small, 
    fontWeight: '600'
  },
  infoSubView: { 
    flexDirection: 'row', 
    alignSelf:'center', 
    marginTop: normalized.hp("2.5%")
  },
  desView: { 
    backgroundColor: AppColors.secondaryColor.lightBlack, 
    borderRadius: 50, 
    paddingHorizontal: "1%", 
    marginHorizontal: "3%", 
  },
  txtDes: {
    color: AppColors.primaryColor.darkBlack, 
    fontSize: AppFonts.commonFont.smallest
  },
  
});

export default styles;
