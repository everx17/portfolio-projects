import {
  AppColors,
  AppIcons,
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  normalized,
} from '../../../utils/AppConstants';
import { Image, ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { firebaseAuth, firebaseConfig } from '../../../utils/Firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import AppLoaders from '../../../components/appLoaders/AppLoaders';
import Buttons from '../../../components/buttons/Buttons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import TextInputs from '../../../components/textInputs/TextInputs';
import { dispatchIsLogIn } from '../../../redux/actions';
import { images } from '../../../assets/images';
import { initializeApp } from 'firebase/app';
import { loginFunc } from '../../../utils/CommonFunctions'
import styles from './styles';
import { useDispatch } from 'react-redux';

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState(''); // Added state for email
  const [password, setPassword] = useState(''); // Added state for password
  const [icEye, setIcEye] = useState('lock-outline');
  const [showPassword, setShowPassword] = useState(true);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  const addLoginData = async () => {
    setLoader(true);
    // Use the 'auth' instance you created earlier
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(() => {
        dispatch(dispatchIsLogIn(true));
        setLoader(false);
        navigation.navigate('bottomStack');
      })
      .catch(error => {
        setLoader(false);
        if (error.code === 'auth/invalid-email') {
          alert('User not found');
        } else {
          alert('Error', error.code);
        }
      });
  };


  // Set Eye Icon
  const eyeIconFun = () => {
    setShowPassword(!showPassword);
    if (showPassword === false) {
      setIcEye('lock-outline');
    } else {
      setIcEye('lock-open');
    }
  };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={images.background} style={styles.backgroundImg} resizeMode='stretch'>
          <KeyboardAwareScrollView>
            <View style={styles.widthAlign}>
              <Text style={styles.txtWelcome1}>WELCOME</Text>
              <Text style={styles.txtWelcome2}>BACK !</Text>

              <Text style={styles.txtEmail}>EMAIL</Text>
              <View style={styles.wrapPassTxtInp}>
                <View style={styles.width80}>
                  <TextInputs
                    placeholder={'Email'}
                    passwordTxtInput
                    value={email}
                    onChangeText={text => setEmail(text)}
                    maxLength={30}
                  />
                </View>
                <View style={styles.width20}>
                  <Ionicons
                    name={'person-outline'}
                    size={AppIcons.commonIcons.large}
                    color={AppColors.secondaryColor.lightBlack}
                  />
                </View>
              </View>

              <Text style={styles.txtEmail}>PASSWORD</Text>
              <View style={{ marginTop: normalized.hp('0%') }}>
                <View style={styles.wrapPassTxtInp}>
                  <View style={styles.width80}>
                    <TextInputs
                      placeholder={'Password'}
                      passwordTxtInput
                      value={password}
                      secureTextEntry={showPassword}
                      onChangeText={text => setPassword(text)}
                      maxLength={30}
                    />
                  </View>
                  <View style={styles.width20}>
                    <MaterialIcons
                      name={icEye}
                      size={AppIcons.commonIcons.large}
                      color={AppColors.secondaryColor.lightBlack}
                      onPress={() => eyeIconFun()}
                    />
                  </View>
                </View>
                <View style={styles.wrapFlex}>
                  <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={styles.txtForgotPass}>FORGET PASSWORD?</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.wrapTxts}>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.txtSignUp}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={addLoginData}>
                <FontAwesome
                  name={'arrow-right'}
                  size={AppIcons.commonIcons.vXLarge}
                  color={AppColors.secondaryColor.lightBlack}
                />
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </ImageBackground>
      </View>
      {loader && <AppLoaders isVisible={loader} label={'Sign in, please wait...'} />}
    </>
  );
};
