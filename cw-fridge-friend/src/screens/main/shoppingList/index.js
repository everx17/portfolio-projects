import React from 'react';
import {View, StyleSheet,SafeAreaView,Text,TouchableOpacity, ScrollView} from 'react-native';
import styles from "./style"
import { AppColors,AppFonts,AppIcons,Ionicons ,normalized} from '../../../utils/AppConstants';
import { images } from '../../../assets/images';
import { ProductsCart } from '../../../components/productsCart/productsCart';

export default function ShoppingList({navigation}){
    const cartItems = [{
        id:1,
        img:images.garlic,
        nam:'Garlic',
      },
      {
        id:2,
        img:images.redPepper,
        nam:'Red Pepper'
      },
      {
        id:3,
        img:images.brieCheese,
        nam:'Brie Cheese'
      },
      {
        id:4,
        img:images.butter,
        nam:'Butter'
      },
      {
        id:5,
        img:images.bratwurst,
        nam:'Bratwurst'
      },
      {
        id:6,
        img:images.steak,
        nam:'Steak Fillet'
      }
    ];
  
    
    const Array = [cartItems]
    
      return (
      
      <SafeAreaView style={styles.container}>
    
    <Text style={styles.txtShoppingList}>My Shopping List</Text>
        <View style={styles.topView}>
          <View style={styles.topbar}></View>
          <TouchableOpacity onPress={()=>navigation.navigate('FillingList')}>
          <Ionicons
          name='add-circle-outline'
          color={AppColors.primaryColor.darkBlack}
          size={AppIcons.commonIcons.vXLarge}
          style={styles.topIcon}
          />
          </TouchableOpacity>
          
        </View>
        <ScrollView style={{marginTop:normalized.hp('-5%'),marginBottom:normalized.hp('0%')}} showsVerticalScrollIndicator={false}>
          <ProductsCart products={Array[0]}/>
     
        </ScrollView>
        
      </SafeAreaView>
      );
}


