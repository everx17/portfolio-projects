import * as yup from 'yup';

import { Alert, Image, ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import {
  AppColors,
  AppIcons,
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  normalized,
} from '../../../utils/AppConstants';
import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import AppLoaders from '../../../components/appLoaders/AppLoaders';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import TextInputs from '../../../components/textInputs/TextInputs';
import { firebaseAuth } from '../../../utils/Firebase';
import { images } from '../../../assets/images';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export const ForgotPassword = ({ navigation }) => {
  navigation = useNavigation();
  const reviewSchema = yup.object({
    Email: yup.string().email('Invalid Email').required('Required field')
  });
  const sendResetEmail = async (email) => {
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Success', 'Password reset email sent!', [
        { text: 'OK', onPress: () => navigation.navigate('Login') }
      ]);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }



  const [email] = useState('');

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={images.background}
          style={styles.backgroundImg}
          resizeMode='stretch'
        >
          <KeyboardAwareScrollView>
            <View style={styles.widthAlign}>
              <Text style={styles.txtResetPass}>RESET PASSWORD</Text>
              <View>
                <Text style={styles.txtForgotPass}>
                  Enter the email address linked to your account.
                </Text>
                <Text style={styles.txtForgotPass}>
                  A request to reset your password will be sent to you.
                </Text>
              </View>
              <Formik
                initialValues={{
                  Email: email
                }}
                validationSchema={reviewSchema}
                onSubmit={(values) => {
                  sendResetEmail(values.Email);
                }}
              >
                {props => (
                  <>
                    <View style={{ marginTop: normalized.hp('10%') }}>
                      <TextInputs
                        placeholder={'Email Address'}
                        simpleTxtInput={true}
                        value={props.values.Email}
                        onChangeText={props.handleChange('Email')}
                        width={'90%'}
                      />
                      <Text style={styles.errorTxt}>
                        {props.touched.Email && props.errors.Email}
                      </Text>
                    </View>

                    <View style={styles.wrapTxts}>
                      <TouchableOpacity onPress={props.handleSubmit} style={{ marginLeft: normalized.hp(33), marginTop: normalized.hp(1) }}>
                        <FontAwesome
                          name={"arrow-right"}
                          size={AppIcons.commonIcons.vXLarge}
                          color={AppColors.secondaryColor.lightBlack}
                        />
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </Formik>
            </View>
          </KeyboardAwareScrollView>
        </ImageBackground>
      </View>
    </>
  );
};
