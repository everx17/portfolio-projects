import React from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FridgeStackNavigator, ShoppingListStackNavigator, RecipeStackNavigator, DonateStackNavigator, AccountStackNavigator } from "./unauthStack";

import { AppColors, AppFonts,AppIcons, normalized, Entypo, FontAwesome, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from "../../utils/AppConstants";

const BottomStack = (props) => {
    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    initialRouteName="Fridge"
      screenOptions={{
        tabBarActiveTintColor: AppColors.radiantColor.xanthous,
        tabBarInactiveTintColor:"#58565B",
        tabBarStyle :{
          height : normalized.hp("8%")
        },
        tabBarLabelStyle: {
          fontSize: AppFonts.commonFont.smallest
        },
        
      }}>

      <Tab.Screen
        name="Shopping List"
        component={ShoppingListStackNavigator}
        options={{
          headerShown: false,
          tabBarLebal: 'Shopping List',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart-variant" color={color} size={AppIcons.commonIcons.small} />
            // <Image source={require('../assest/icon/Dashboardb.png')} style={{tintColor:color,...styles.product_container_logo}}/>
          ),
        }} />

      <Tab.Screen
        name="Recipe"
        component={RecipeStackNavigator}
        options={{
          title:"Recipe",
          headerShown: false,
          tabBarLebal: 'Recipe',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-edit-outline" color={color} size={AppIcons.commonIcons.small} />
            // <Image source={require('../assest/icon/Huddles.png')} style={{tintColor:color,...styles.product_container_logo}} />
          ),
        }} />

      <Tab.Screen
        name="Fridge"
        component={FridgeStackNavigator}
        options={{
          headerShown: false,
          tabBarLebal: 'Fridge',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="fridge-outline" color={color} size={40} />
            // <Image source={require('../assest/icon/Priorities.png')} style={{tintColor:color,...styles.product_container_logo}} />
          ),
        }} />

      <Tab.Screen
        name="Donate"
        component={DonateStackNavigator}
        options={{
          headerShown: false,
          tabBarLebal: 'Donate',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="hand-holding-heart" color={color} size={AppIcons.commonIcons.smallest} />
          ),
        }} />

      <Tab.Screen
        name="Account"
        component={AccountStackNavigator}
        options={{
          headerShown: false,
          tabBarLebal: 'Account',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle-o" color={color} size={AppIcons.commonIcons.smallest} />
          ),
        }} />
    </Tab.Navigator>
  );
};

export default BottomStack;



