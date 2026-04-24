import * as yup from 'yup';

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
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import AppLoaders from '../../../components/appLoaders/AppLoaders';
import Buttons from '../../../components/buttons/Buttons';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import TextInputs from '../../../components/textInputs/TextInputs';
import { auth } from '../../../utils/Firebase';
import { dispatchIsLogIn } from '../../../redux/actions';
import { firebaseAuth } from '../../../utils/Firebase';
import { images } from '../../../assets/images';
import { loginFunc } from '../../../utils/CommonFunctions';
import styles from './styles';
import { useDispatch } from 'react-redux';

export const SignUp = ({ navigation }) => {
  const reviewSchema = yup.object({
    Name: yup.string().required('Required field'),
    Email: yup.string().email('Invalid Email').required('Required field'),

    Password: yup
      .string()
      .min(6, '6 is minimum length')
      .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Must contain at least one lowercase letter')
      .matches(/[0-9]/, 'Must contain at least one number')
      .matches(/[^a-zA-Z0-9]/, 'Must contain at least one symbol')
      .required('Required field'),
  });
  const [name] = useState("")
  const [email] = useState('');
  const [password] = useState('');
  const [icEye, setIcEye] = useState('eye-with-line');
  const [showPassword, setShowPassword] = useState(true);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  const handleSignUp = async (values) => {
    setLoader(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(firebaseAuth, values.Email, values.Password);
      const user = userCredential.user;
      console.log('User registered:', user);
      setLoader(false);

      // Display the successful sign-up pop-up
      alert('Sign up successful! Please log in to continue.', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login') // Navigate to Login page after user acknowledges
        }
      ]);

    } catch (error) {
      setLoader(false);
      console.error('Error signing up:', error);
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use. Please choose another email or log in.');
      } else {
        alert('Error:', error.message);
      }
    }
  };




  const addLoginData = async (values, actions) => {
    setLoader(true);
    loginFunc(values)
      .then(() => {
        dispatch(dispatchIsLogIn(true));
        setLoader(false);
        navigation.navigate('bottomStack');
      })
      .catch(error => {
        setLoader(false);
        if (error.code === 'auth/user-not-found') {
          alert('User not found');
        } else {
          alert('Error', error.code);
        }
      });
  };
  //Set Eye Icon
  const eyeIconFun = () => {
    setShowPassword(!showPassword);
    if (showPassword === true) {
      setIcEye('eye');
    } else {
      setIcEye('eye-with-line');
    }
  };
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
              <Text style={styles.txtGetStarted1}>GET</Text>
              <Text style={styles.txtGetStarted2}>STARTED!</Text>
              {/* <View style={styles.imageWrap}>
              <Image
                source={images.logo}
                style={styles.innerImg}
                resizeMode={'contain'}
              />
            </View> */}

<Formik
                initialValues={{
                  Name: name,
                  Email: email,
                  Password: password,
                }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                  handleSignUp(values);
                }}
              >

                {props => (
                  <>
                    <Text style={styles.txtEmail}>EMAIL</Text>
                    <View style={{ marginBottom: '3%' }}>
                      <TextInputs
                        placeholder={props.touched.Email && props.errors.Email ? props.errors.Email : 'Email'}
                        simpleTxtInput={true}
                        value={props.values.Email}
                        onChangeText={props.handleChange('Email')}
                        width={'90%'}
                      />
                    </View>

                    <Text style={styles.txtEmail}>PASSWORD</Text>
                    <View style={{ marginTop: normalized.hp('2%') }}>
                      <TextInputs
                        placeholder={props.touched.Password && props.errors.Password ? props.errors.Password : 'Password'}
                        simpleTxtInput={true}
                        value={props.values.Password}
                        onChangeText={props.handleChange('Password')}
                        width={'90%'}
                      />
                      <View style={styles.wrapFlex}>
                        <View>
                          <Text style={styles.txtForgotPass}>
                            At least 6 characters with a combination of uppercase
                          </Text>
                          <Text style={styles.txtForgotPass}>
                            letters, lowercase, numbers, and symbols
                          </Text>
                        </View>
                      </View>
                      <TouchableOpacity onPress={() => props.handleSubmit()} style={styles.containerRegister}>
                        <Text style={styles.txtRegister}>REGISTER</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </Formik>
            </View>

            <View style={styles.wrapTxts}>

              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.txtLogIn}>LOG IN</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </ImageBackground>
      </View>
      {loader && (
        <>
          <AppLoaders isVisible={loader} label={'SignIn please wait..'} />

        </>
      )}
    </>
  );
};
