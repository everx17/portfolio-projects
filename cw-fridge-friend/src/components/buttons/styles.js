import { StyleSheet } from "react-native";
import { AppColors, AppFonts, normalized } from "../../utils/AppConstants";

const styles = StyleSheet.create({
  largeBtnWrap: {
    alignSelf: "center",
    height: normalized.hp("7%"),
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: normalized.wp("95%"),
  },

  largeBtnWrap1: {
    alignSelf: "center",
    height: normalized.hp("7%"),
    borderRadius: 20,
    width: normalized.wp("95%"),
  },
  largeBtnWrap2: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: normalized.wp("5%"),
  },

  iconTxtBtn: {
    backgroundColor: AppColors.primaryColor.darkWhite,
    flexDirection: "row",
    width: normalized.wp("85%"),
    borderWidth: 0,
  },

  iconImg: {
    height: normalized.wp("6%"),
    width: normalized.wp("6%"),
    marginRight: normalized.wp("2%"),
  },

  txtTitle: {
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "500",
  },

  btnIconWrap: {
    // backgroundColor: AppColors.grey.dark,
    backgroundColor: "red",
    alignItems: "center",
    height: normalized.wp("38%"),
    justifyContent: "center",
    borderRadius: 20,
    marginTop: normalized.hp("3%"),
    width: normalized.wp("42%"),
  },

  btnIcon: {
    height: normalized.wp("7.5%"),
    width: normalized.wp("7.5%"),
  },

  btnIconTxt: {
    color: AppColors.primaryColor.darkWhite,
    textAlign: "center",
    fontSize: AppFonts.commonFont.small,
    fontWeight: "400",
    alignSelf: "center",
    marginTop: normalized.hp("1.5%"),
  },

  largeBtnCustomWrap: {
    alignSelf: "center",
    // borderWidth: 1,
    height: normalized.hp("8%"),
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  largeNewBtnWrap: {
    alignSelf: "center",
    // borderWidth: 1,
    height: normalized.hp("8%"),
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: normalized.wp("85%"),
  },

  iconNewBtn: {
    // backgroundColor: AppColors.white.white,
    flexDirection: "row",
    width: normalized.wp("85%"),
    borderWidth: 0,
  },
});

export default styles;
