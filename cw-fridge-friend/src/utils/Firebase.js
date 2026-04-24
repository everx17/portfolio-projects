import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { AppRegistry } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { name as appName } from '../../app.json';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyD55NujLI-yCEyVivJCAY9Oec7TAeWWLHI',
  authDomain: 'fridgefriend-5ce60.firebaseapp.com',
  projectId: 'fridgefriend-5ce60',
  storageBucket: 'fridgefriend-5ce60.appspot.com',
  messagingSenderId: '123172122460',
  appId: '1:123172122460:web:cd0cb5353d46c9f3df1b99',
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const fireStore = getFirestore(firebaseApp);

export { firebaseAuth, firebaseConfig, fireStore };