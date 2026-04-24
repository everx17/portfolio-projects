import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, Login, SignUp, ForgotPassword } from '../../screens/auth';

import Fridge from "../../screens/main/fridge/fridge";
import ShoppingList from '../../screens/main/shoppingList';
import Recipe from '../../screens/main/recipes';
import RecipeDetail from '../../screens/sub/recipeDetail';
import Donate from '../../screens/main/donate';
import Account from '../../screens/main/account';
import RestockingFridge from "../../screens/sub/restockingFridge/restockingFridge";
import FillingList from "../../screens/sub/fillingList/fillingList";

const StackAuth = createNativeStackNavigator();
export const AuthStack = () => {
  return (
    <StackAuth.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}>
      <StackAuth.Screen name="Splash" component={Splash} />
      <StackAuth.Screen name="Login" component={Login} />
      <StackAuth.Screen name="SignUp" component={SignUp} />
      <StackAuth.Screen name="ForgotPassword" component={ForgotPassword} />

      <StackAuth.Screen name="Fridge" component={Fridge} />
      <StackAuth.Screen name="ShoppingList" component={ShoppingList} />
      <StackAuth.Screen name="Recipe" component={Recipe} />
      <StackAuth.Screen name="Donate" component={Donate} />
      <StackAuth.Screen name="Account" component={Account} />

      <StackAuth.Screen name="RecipeDetail" component={RecipeDetail} />
      <StackAuth.Screen name="RestockingFridge" component={RestockingFridge} />
      <StackAuth.Screen name="FillingList" component={FillingList} />

    </StackAuth.Navigator>
  );
};
