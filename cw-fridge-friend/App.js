import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView, LogBox } from 'react-native';
import React from 'react';
import Routing from './src/boot/routing';
import { Store } from './src/redux/store';
import { Provider } from 'react-redux';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Provider store={Store}>
    <SafeAreaView style={{ flex: 1 }}>
      <Routing />
    </SafeAreaView>
    </Provider>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
