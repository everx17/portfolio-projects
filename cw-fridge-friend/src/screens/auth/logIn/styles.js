import {StyleSheet, Dimensions, Platform} from 'react-native';
import {
  AppColors,
  normalized,
  normalizedFont,
  AppFonts,
} from '../../../utils/AppConstants';

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
    marginTop: Platform.OS === 'ios' && normalized.hp('-5%'),
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
  txtWelcome1: {
    color: AppColors.primaryColor.darkBlack,
    marginLeft: normalized.hp('5%'),
    marginTop: normalized.hp('20%'),
    fontSize: AppFonts.commonFont.mediumLarge,
    fontWeight: '800',
  },
  txtWelcome2: {
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
    backgroundColor:AppColors.primaryColor.darkWhite,
    marginTop:'6.5%'
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
    top:normalized.hp('3%')
  },
  txtAccount: {
    color: AppColors.primaryColor.darkBlack,
    fontWeight: '500',
    fontSize: AppFonts.commonFont.small,
    marginTop: normalized.hp('2%'),
  },
  txtSignUp: {
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
    marginTop: normalized.hp('15%'),
    flexDirection: 'row',
    justifyContent:'space-around'
  },
  errorTxt: {
    color: AppColors.errorColor.firered,
    margin: normalized.hp('1%'),
    fontSize: AppFonts.commonFont.smallest,
  },
  txtForgotPass: {
    color: AppColors.secondaryColor.lightBlack,
    fontSize: AppFonts.commonFont.smallest,
    textDecorationLine: 'underline',
    borderBottomColor:AppColors.secondaryColor.lightBlack,
    borderBottomWidth:2,
    marginRight: normalized.hp('8%'),
    right:normalized.hp(-25)
  },
  wrapFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: normalized.hp('1%'),
  },

});

export default styles;
