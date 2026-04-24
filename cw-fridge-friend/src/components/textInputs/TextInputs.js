import React from "react";
import { TextInput } from "react-native";

import styles from "./styles";
import { AppColors } from "../../utils/AppConstants";

const TextInputs = (props) => {
  const {
    simpleTxtInput,
    label,
    value,
    onChangeText,
    secureTextEntry,
    placeholder,
    width,
    maxLength,
    passwordTxtInput,
    keyboardType,
    editable,
  } = props;
  return (
    <>
      {simpleTxtInput ? (
        <TextInput
          label={label}
          value={value}
          editable={editable}
          placeholderTextColor={AppColors.secondaryColor.placeHolderCol}
          onChangeText={onChangeText}
          // autoCapitalize={false}
          autoCorrect={false}
          keyboardType={keyboardType}
          style={{
            ...styles.txtInp,
            width: width,
          }}
          placeholder={placeholder}
          maxLength={maxLength}
        />
      ) : passwordTxtInput ? (
        <TextInput
          label={label}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          // autoCapitalize={false}
          placeholderTextColor={AppColors.secondaryColor.placeHolderCol}
          style={styles.txtInpwidthHeig}
          placeholder={placeholder}
          maxLength={maxLength}
        />
      ) : null}
    </>
  );
};
export default TextInputs;
