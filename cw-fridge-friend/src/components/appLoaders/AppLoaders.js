import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { AppColors } from "../../utils/AppConstants";
import Modal from "react-native-modal";
import styles from "./styles";
const AppLoaders = (props) => {
  const { isVisible, label } = props;
  return (
    <>
      <Modal isVisible={isVisible}>
        <View style={styles.modalWrap}>
          <ActivityIndicator
            size="large"
            color={AppColors.primaryColor.darkWhite}
            // style={styles.indic}
          />
          <Text style={styles.txtLoading}>{label}</Text>
        </View>
      </Modal>
    </>
  );
};

export default AppLoaders;
