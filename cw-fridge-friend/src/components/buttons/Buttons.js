import React, { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./styles";
import {
  AntDesign,
  AppColors,
  AppIcons,
  normalized,
} from "../../utils/AppConstants";
import { images } from "../../assets/images";
const Button = (props) => {
  const { label, onPress, txtColor, borderCol, marginTop, largeBtn, menuBtn } =
    props;

  return (
    <>
      {largeBtn ? (
        <>
          <LinearGradient
            colors={["#257BF4", "#0854C4"]}
            style={{ ...styles.largeBtnWrap, marginTop: marginTop }}
          >
            <TouchableOpacity
              onPress={onPress}
              style={{
                ...styles.largeBtnWrap,
                borderColor: borderCol,
              }}
            >
              <Text style={{ ...styles.txtTitle, color: txtColor }}>
                {label}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </>
      ) : menuBtn ? (
        <>
          <LinearGradient
            colors={["#2A3549", "#616161"]}
            style={{ ...styles.largeBtnWrap1, marginTop: marginTop }}
          >
            <TouchableOpacity
              onPress={onPress}
              style={{ ...styles.largeBtnWrap2, marginTop: marginTop }}
            >
              <Text style={{ ...styles.txtTitle, color: txtColor }}>
                {label}
              </Text>

              <AntDesign
                name={"forward"}
                color={AppColors.primaryColor.darkWhite}
                size={AppIcons.commonIcons.medium}
              />
            </TouchableOpacity>
          </LinearGradient>
        </>
      ) : null}
    </>
  );
};
export default Button;
