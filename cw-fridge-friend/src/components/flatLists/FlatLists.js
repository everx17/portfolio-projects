import React, { useContext } from "react";
import { Image, Text, TouchableOpacity, View, FlatList } from "react-native";
import styles from "./styles";
import { AppColors, AppFonts, normalized } from "../../utils/AppConstants";
import { images } from "../../assets/images";
const FlatLists = (props) => {
  const { label, categories, data, fridge, onPress } = props;

  return (
    <>
      {categories ? (
        <>
          <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item, index }) => {
              return (
                <>
                  <TouchableOpacity
                    style={{
                      ...styles.wrapItemName,
                      backgroundColor: item?.isSelected
                        ? AppColors.secondaryColor.darkBlue
                        : AppColors.secondaryColor.shadedBlack,
                    }}
                  >
                    <Text style={styles.nameItem}>{item?.name}</Text>
                  </TouchableOpacity>
                </>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      )
        :
        fridge ? (
          <>
            <TouchableOpacity 
            onPress={onPress}
            style={styles.mainView}>
              <Image
                style={styles.image}
                source={data.image} />
                 
              <View style={styles.infoMainView}>
                <Text style={styles.txtHeading}>{data.title}</Text>

                <View style={styles.infoSubView}>
                  <Text style={styles.txtDes}>You have : </Text>
                  <View style={styles.desView}>
                    <Text style={{...styles.txtDes, color: AppColors.primaryColor.darkWhite}}> {data.ingredients}/{data.totalIngredients}</Text>
                  </View>
                  <Text style={styles.txtDes}>ingredients</Text>
                </View>
              </View>

            </TouchableOpacity>

          </>
        )
          : null}
    </>
  );
};
export default FlatLists;
