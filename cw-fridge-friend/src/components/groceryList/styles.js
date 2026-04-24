import { AppColors, AppFonts, AppIcons, normalized } from "../../utils/AppConstants";

import { StyleSheet } from "react-native";
import { images } from "../../assets/images";

const styles = StyleSheet.create({
container:{
    height:normalized.hp('18%'),
    borderColor:AppColors.primaryColor.darkBlack,
    borderWidth:2,
    width:normalized.wp('90%'),
    marginHorizontal:normalized.hp('2%'),
    marginTop:normalized.hp('4%'),
    borderRadius:10,


},
header:{
    flexDirection:'row',
    backgroundColor:AppColors.primaryColor.darkWhite,
    width:normalized.wp('3%'),

},
img:{
    height:normalized.hp('4%'),
    width:normalized.wp('8%'),


},
Text:{
    fontSize:AppFonts.commonFont.small,
    top:normalized.hp('1%'),
    left:normalized.hp(0.3)
},
iconContainer:{
    flexDirection:'row',
    marginTop:normalized.hp('-2.5%'),
    backgroundColor:AppColors.primaryColor.darkWhite,
    width:normalized.wp('24.5%'),
    left:normalized.wp('3%')
},
iconContainer1:{
    flexDirection:'row',
    marginTop:normalized.hp('-2.5%'),
    backgroundColor:AppColors.primaryColor.darkWhite,
    width:normalized.wp('37%'),
    left:normalized.wp('3%')
},
productImg:{
    height:normalized.hp('6%'),
    width:normalized.wp('13%'),
},
productName:{
    fontSize:AppFonts.commonFont.vxSmall,
    alignSelf:'center',

},
productContainer:{
    marginTop:normalized.hp('1.5%'),
    marginHorizontal:normalized.hp('1%'),
    alignItems:'center',
    justifyContent:'center'
},
listContainer:{
    flexDirection:'row'
},
circles:{
    borderRadius:50,
    width:normalized.wp('3%'),
    height:normalized.hp('1.5%')

},
circlesContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:normalized.hp('4%'),
    width:normalized.wp('46%'),
    alignSelf:'center'
}

})

export default styles;