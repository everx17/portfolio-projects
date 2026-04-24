import {
  AppColors,
  AppFonts,
  normalized,
  normalizedFont,
} from '../../../utils/AppConstants';
import {Dimensions, Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg:{
    flex:1,
    
  },
  widthAlign: {
    alignSelf: 'center',
    width: normalized.wp('95%'),
    marginTop: Platform.OS === 'ios' && normalized.hp('-%'),
  },
  imageWrap: {
    width: normalized.wp('22%'),
    height: normalized.wp('22%'),
    alignSelf: 'center',
    marginTop: normalized.hp('3%'),
  },
  innerImg: {
    width: '100%',
    height: '100%',
  },
  txtGetStarted1: {
    color: AppColors.primaryColor.darkBlack,
    marginLeft: normalized.hp('5%'),
    marginTop: normalized.hp('23%'),
    fontSize: AppFonts.commonFont.mediumLarge,
    fontWeight: '800',
  },
  txtGetStarted2: {
    color: AppColors.primaryColor.darkBlack,
    marginLeft: normalized.hp('5%'),
    fontSize: AppFonts.commonFont.mediumLarge,
    fontWeight: '800',
  },
  wrapPassTxtInp: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: AppColors.primaryColor.darkBlack,
    height: normalized.hp('7%'),
    width: '90%',
    flexDirection: 'row',
    alignSelf:'center',
    backgroundColor:AppColors.primaryColor.darkWhite
  },
  width80: {
    width: '80%',
  },
  width20: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtEmail: {
    color: AppColors.primaryColor.darkBlack,
    fontWeight: '600',
    fontSize: AppFonts.commonFont.small,
    marginLeft:normalized.hp('3.5%'),
    marginTop:normalized.hp('2%')
  },
  txtName: {
    color: AppColors.primaryColor.darkBlack,
    fontWeight: '600',
    fontSize: AppFonts.commonFont.small,
    marginLeft:normalized.hp('3.5%'),
    marginTop:normalized.hp('2%')
    
  },
  txtAccount: {
    color: AppColors.primaryColor.darkBlack,
    fontWeight: '500',
    fontSize: AppFonts.commonFont.small,
    marginTop: normalized.hp('2%'),
  },
  containerRegister: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: normalized.hp('2%'),
  },
  txtRegister: {
    justifyContent: 'center',
    alignItems: 'center',
    color: AppColors.primaryColor.darkBlack,
    fontWeight: '500',
    fontSize: AppFonts.commonFont.medium,
    textDecorationLine: 'underline',
    marginTop: normalized.hp('1%'),
    borderBottomWidth:2,
    borderColor: AppColors.primaryColor.darkBlack,
    right:normalized.hp(2)

  },
  txtLogIn: {
    color: AppColors.primaryColor.darkBlack,
    fontWeight: '500',
    fontSize: AppFonts.commonFont.medium,
    textDecorationLine: 'underline',
    marginTop: normalized.hp('1%'),
    borderBottomWidth:2,
    borderColor: AppColors.primaryColor.darkBlack,
    right:normalized.hp(2)

  },
  wrapTxts: {
    alignSelf: 'center',
    alignItems: 'center',
    // borderTopWidth: 1,
    width: normalized.wp('95%'),
    borderColor: 'red',
    borderColor: AppColors.secondaryColor.placeHolderCol,
    marginTop: normalized.hp('0%'),
    flexDirection: 'row',
    justifyContent:'space-around'
  },
  errorTxt: {
    color: AppColors.errorColor.firered,
    marginHorizontal: normalized.hp('5%'),
    fontSize: AppFonts.commonFont.smallest,
    zIndex: 99,
  },
  txtForgotPass: {
    color: AppColors.secondaryColor.lightBlack,
    fontSize: AppFonts.commonFont.smallest,
    borderBottomColor:AppColors.secondaryColor.lightBlack,
    borderBottomWidth:0,
    marginHorizontal: normalized.hp('1%'),
    alignSelf:'center',
    bottom:normalized.hp(5.5)
  },
  wrapFlex: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: normalized.hp('10%'),
  },

});

export default styles;
