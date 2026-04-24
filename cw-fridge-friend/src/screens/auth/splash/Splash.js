import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {images} from '../../../assets/images';
import {useSelector} from 'react-redux';
export const Splash = props => {
  const {navigation} = props;
  const {logIn} = useSelector(state => state.userReducer);
  useEffect(() => {
    setTimeout(() => {
      if (logIn) {
        navigation.replace('bottomStack');
      } else {
        navigation.replace('Login');
      }
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.wrapImg}>
        <Image
          style={styles.innerImg}
          resizeMode="contain"
          source={images.logo}
        />
      </View>
    </View>
  );
};
