import { StyleSheet, Dimensions } from "react-native";
import {
  AppColors,
  normalized,
  normalizedFont,
  AppFonts,
} from "../../utils/AppConstants";

const styles = StyleSheet.create({
  txtLoading: {
    color: AppColors.primaryColor.darkWhite,
    fontSize: AppFonts.commonFont.small,
    margin: normalized.hp("2%"),
  },
  modalWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
