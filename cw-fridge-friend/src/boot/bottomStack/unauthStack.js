import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Account from '../../screens/main/account';
import Donate from '../../screens/main/donate';
import ShoppingList from '../../screens/main/shoppingList';
import Recipe from "../../screens/main/recipes";
import RecipeDetail from "../../screens/sub/recipeDetail";
import Fridge from "../../screens/main/fridge/fridge";
import RestockingFridge from "../../screens/sub/restockingFridge/restockingFridge";
import FillingList from "../../screens/sub/fillingList/fillingList";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
    headerShown : false
};

const FridgeStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={screenOptionStyle}>
            <Stack.Screen name="Fridge" component={Fridge} />
            <Stack.Screen name="RestockingFridge" component={RestockingFridge} />
            
        </Stack.Navigator>
    );
}

const RecipeStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={screenOptionStyle}>
            <Stack.Screen name="Recipe" component={Recipe} />
            <Stack.Screen name="RecipeDetail" component={RecipeDetail} />

        </Stack.Navigator>
    );
}

const ShoppingListStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={screenOptionStyle}>
            <Stack.Screen name="ShoppingList" component={ShoppingList} />
            <Stack.Screen name="FillingList" component={FillingList} />
                
        </Stack.Navigator>
    );
}

const DonateStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={screenOptionStyle}>
                <Stack.Screen name="Donate" component={Donate} />
        </Stack.Navigator>
    );
}

const AccountStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={screenOptionStyle}>
            <Stack.Screen name="Account" component={Account} />
            
        </Stack.Navigator>
    );
}


export {FridgeStackNavigator, RecipeStackNavigator, ShoppingListStackNavigator, DonateStackNavigator, AccountStackNavigator };
