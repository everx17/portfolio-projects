import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { AppColors, AppIcons, Ionicons, normalized } from '../../../utils/AppConstants';
import { Grocery } from '../../../components/groceryList/grocery'
import { images } from '../../../assets/images';

export default function Fridge({ navigation }) {

  const dairy = [{
    id: 1,
    img: images.yogurt,
    nam: 'Milk',
  },
  {
    id: 2,
    img: images.yogurt,
    nam: 'Yogurt'
  },
  {
    id: 3,
    img: images.cheese,
    nam: 'Cheese'
  },
  {
    id: 4,
    img: images.eggs,
    nam: 'Eggs'
  },
  {
    id: 5,
    img: images.iceCream,
    nam: 'Ice Cream'
  }
  ];

  const vege = [{
    id: 1,
    img: images.carrot,
    nam: 'Carrot',
  },
  {
    id: 2,
    img: images.mushrooms,
    nam: 'Mushrooms'
  },
  {
    id: 3,
    img: images.cheese,
    nam: 'Cheese'
  },
  {
    id: 4,
    img: images.peas,
    nam: 'Peas'
  },
  {
    id: 5,
    img: images.iceCream,
    nam: 'Ice Cream'
  }
  ];

  const fruits = [{
    id: 1,
    img: images.peach,
    nam: 'Peach',
  },
  {
    id: 2,
    img: images.coconut,
    nam: 'Coconut'
  },
  {
    id: 3,
    img: images.cheese,
    nam: 'Cheese'
  },
  {
    id: 4,
    img: images.apple,
    nam: 'Apple'
  },
  {
    id: 5,
    img: images.iceCream,
    nam: 'Ice Cream'
  }
  ];

  const grain = [{
    id: 1,
    img: images.rice,
    nam: 'Rice',
  },
  {
    id: 2,
    img: images.coconut,
    nam: 'Coconut'
  },
  {
    id: 3,
    img: images.wheat,
    nam: 'Wheat'
  },
  {
    id: 4,
    img: images.apple,
    nam: 'Apple'
  },
  {
    id: 5,
    img: images.iceCream,
    nam: 'Ice Cream'
  }
  ];

  const Array = [dairy, vege, fruits, grain]

  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.txtHello}>
        HELLO USER
      </Text>
      <View style={styles.topView}>
        <Text style={styles.txtFridge}>WHAT'S IN YOUR FRIDGE?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('RestockingFridge')}>
          <Ionicons
          name='add-circle-outline'
          color={AppColors.primaryColor.darkBlack}
          size={AppIcons.commonIcons.vXLarge}
          style={styles.topIcon}
          />
          </TouchableOpacity>

      </View>
      <ScrollView style={{ marginTop: normalized.hp('2%'), marginBottom: normalized.hp('4%') }} showsVerticalScrollIndicator={false}>

        <Grocery image={images.dairy} name={'DAIRY'} products={Array[0]} />
        <Grocery image={images.vegetables} name={'VEGETABLES'} products={Array[1]} />
        <Grocery image={images.fruits} name={'FRUITS'} products={Array[2]} />
        <Grocery image={images.grains} name={'GRAIN'} products={Array[3]} />
        <Grocery image={images.protein} name={'PROTEIN'} products={Array[4]} />
        <Grocery image={images.spices} name={'SPICES'} products={Array[5]} />
      </ScrollView>

    </SafeAreaView>
  );
}




