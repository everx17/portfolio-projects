import {
  AppColors,
  AppFonts,
  dimensionized,
  normalized,
} from '../../../utils/AppConstants';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primaryColor.darkWhite,
    marginTop: normalized.hp("-5%"),
  },
  innerImg: {
    width: '100%',
    height: '100%',
    borderRadius: 90,
  },
  wrapImg: {
    height: dimensionized.SCREEN_WIDTH / 2.5,
    width: dimensionized.SCREEN_WIDTH / 2.5,
    alignSelf: 'center',
    marginTop: normalized.hp('2%'),
    borderWidth: 5,
    borderColor: AppColors.secondaryColor.darkBlue,
    borderRadius: 90,
  },
  errorTxt: {
    color: AppColors.errorColor.firered,
    margin: normalized.hp('1%'),
    fontSize: AppFonts.commonFont.smallest,
  },
  txtFridge: {
    color: AppColors.primaryColor.darkBlack,
    fontWeight: '600',
    fontSize: AppFonts.commonFont.medium,
  },
  txtHello: {
    color: AppColors.primaryColor.darkBlack,
    fontWeight: '600',
    fontSize: AppFonts.commonFont.smallest,
    top:50,
    left:20
  },
  wrapPassTxtInp: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: AppColors.secondaryColor.placeHolderCol,
    height: normalized.hp('7%'),
    width: '100%',
    flexDirection: 'row',
  },
  width80: {
    width: '80%',
  },
  width20: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: AppColors.secondaryColor.lightBlack,
    width: '100%',
    marginTop: normalized.hp('1%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalized.hp('2%'),
  },
  wrapContent: {
    backgroundColor: AppColors.secondaryColor.lightBlack,
    width: '100%',
    padding: normalized.hp('1%'),
    borderTopColor: 'white',
    borderTopWidth: 1,
  },
  topView:{
    flexDirection:'row',
    marginTop:normalized.hp('1%'),
    height:normalized.hp('12%'),
    top:55,
    justifyContent:'space-around',
    backgroundColor:AppColors.primaryColor.darkWhite
  },
  topIcon:{
    bottom:10
  }
});

export default styles;
