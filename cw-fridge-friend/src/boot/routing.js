import React, { useEffect, useState } from "react";

//Stacks
import { AuthStack } from "./authStack/AuthNavigation";
import BottomStack from "./bottomStack/BottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Routing = () => {
  // const {UserSlice} = useSelector(state => state);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="authStack" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="authStack" component={AuthStack} />
        <Stack.Screen name="bottomStack" component={BottomStack} />
        {/* <Stack.Screen name="Fridge" component={Fridge} />
        <Stack.Screen name="ShoppingList" component={ShoppingList} />
        <Stack.Screen name="RestockingFridge" component={RestockingFridge} /> */}
        {/* <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="TermAndCondition" component={TermAndCondition} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
