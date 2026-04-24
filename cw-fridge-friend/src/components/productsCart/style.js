import { StyleSheet } from "react-native";
import { AppColors,AppFonts,AppIcons,normalized } from "../../utils/AppConstants";
import { images } from "../../assets/images";

const styles = StyleSheet.create({
container:{
    height:normalized.hp('8%'),
    width:normalized.wp('100%'),
    marginTop:normalized.hp('4%'),
    borderRadius:25,
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:normalized.hp('2%')


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
    fontSize:AppFonts.commonFont.smallest,
    top:normalized.hp('2.5%'),
    left:normalized.hp(0.3),
    fontWeight:'500',
    width:normalized.wp('18%')
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
    alignSelf:'center',
    marginTop:normalized.hp('1.3%')
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
    borderRadius:100,
    width:normalized.wp('20%'),
    height:normalized.hp('9%'),
    borderColor:AppColors.primaryColor.darkBlack,
    borderWidth:2
    

},
counter:{
    flexDirection:'row',
    width:normalized.wp('30%'),
    height:'75%',
    top:normalized.hp('1%'),
    borderWidth:1,
    borderColor:AppColors.primaryColor.darkBlack,

},
counterAdd:{
    backgroundColor:AppColors.radiantColor.sepia,
    width:'30%'
},
counterResult:{
    width:'40%'
},
counterSubtract:{
    backgroundColor:AppColors.radiantColor.sepia,
    width:'30%'
},
AddButton:{
    alignSelf:'center',
    fontSize:AppFonts.commonFont.large,
    top:normalized.hp('0.7%')
},
subtractButton:{
    alignSelf:'center',fontSize:AppFonts.commonFont.extraLarge,
    bottom:normalized.hp('0.7%')

},
checkBox:{
    flexDirection:'row',
    width:normalized.wp('12%'),
    height:'75%',
    top:normalized.hp('1%'),
    borderWidth:1,
    borderColor:AppColors.primaryColor.darkBlack
},

})

export default styles;