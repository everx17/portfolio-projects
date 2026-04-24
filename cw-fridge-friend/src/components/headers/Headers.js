import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import {
  AppColors,
  AppIcons,
  normalized,
  MaterialIcons,
} from '../../utils/AppConstants';
import {images} from '../../assets/images';
const Headers = props => {
  const {label, onPress, homeFeedHeader, backBtnHeader} = props;

  return (
    <>
      {homeFeedHeader ? (
        <>
          <LinearGradient
            colors={['#257BF4', '#0854C4']}
            style={{
              ...styles.headerStyle1,
            }}>
            <View style={styles.flexRow}>
              <View style={styles.wrapImg}>
                <Image
                  resizeMode="contain"
                  style={styles.innerImg}
                  source={images.logo}
                />
              </View>
              <Text style={{...styles.txtTitle1}}>{label}</Text>
              <Text>{'          '}</Text>
            </View>
          </LinearGradient>
        </>
      ) : backBtnHeader ? (
        <>
          <LinearGradient
            colors={['#257BF4', '#0854C4']}
            style={{
              ...styles.headerStyle1,
            }}>
            <View style={styles.flexRow}>
              <TouchableOpacity onPress={onPress}>
                <MaterialIcons
                  name={'backspace'}
                  size={AppIcons.commonIcons.small}
                  color={AppColors.primaryColor.darkWhite}
                />
              </TouchableOpacity>
              <Text style={{...styles.txtTitle1}}>{label}</Text>
              <Text>{'      '}</Text>
            </View>
          </LinearGradient>
        </>
      ) : null}
    </>
  );
};
export default Headers;
