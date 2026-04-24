import React from 'react';
import {View, StyleSheet,Text,Image,ScrollView,FlatList, Touchable, TouchableOpacity,SafeAreaView} from 'react-native';
import { images } from '../../assets/images';
import styles from './style';
import { AppFonts } from '../../utils/AppConstants';


export const ProductsCart = (props) => {
    const {products} = props;
    return (
        <SafeAreaView>
        <FlatList
            data={products}
            keyExtractor={item=>item.id}
            renderItem={({item,index})=>{
                return(
                    <View style={styles.container}>
                    <View style={styles.circles}>
                        <Image source={item.img} style={styles.productImg} />
                        
                    </View>
                    <Text style={styles.Text}>
                        {item.nam}
                    </Text>
                    <View style={styles.counter}>
                        <TouchableOpacity style={styles.counterAdd}>
                            <Text style={styles.AddButton}>+</Text>
            
                        </TouchableOpacity >
                        <View style={styles.counterResult}>
            
                        </View>
                        <TouchableOpacity style={styles.counterSubtract}>
                            <Text style={styles.subtractButton}>-</Text>
                        </TouchableOpacity>
                    </View>
            
                    <TouchableOpacity style={styles.checkBox}>
            
                    </TouchableOpacity>
                      
                       
                        
                    </View>
                )
            }}

        />
               
        </SafeAreaView>
        
        
    );
}




