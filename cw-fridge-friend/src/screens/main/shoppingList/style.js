import {StyleSheet} from 'react-native';
import {
  AppColors,
  dimensionized,
  AppFonts,
  normalized,
} from '../../../utils/AppConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primaryColor.darkWhite,
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
    borderColor: AppColors.radiantColor.sepia,
    borderRadius: 90,
  },
  errorTxt: {
    color: AppColors.errorColor.firered,
    margin: normalized.hp('1%'),
    fontSize: AppFonts.commonFont.smallest,
  },
  txtShoppingList: {
    color: AppColors.primaryColor.darkBlack,
    fontWeight: '600',
    fontSize: AppFonts.commonFont.large,
    marginTop:normalized.hp('5%'),
    left:normalized.wp('10%')
  },
  txtEdit: {
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
    marginTop: normalized.hp('2%'),
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
    marginTop:normalized.hp('2%'),
    // justifyContent:'space-around'
  },
  topIcon:{
    bottom:50,
    left:normalized.hp('6%'),
    fontSize:70,
  },
  topbar:{
    width:normalized.wp('59%'),
    height:normalized.hp('1.5%'),
    backgroundColor:AppColors.radiantColor.sepia,
    borderWidth:0.7,
    borderColor:AppColors.radiantColor.sepia,
    
  }
});

export default styles;
