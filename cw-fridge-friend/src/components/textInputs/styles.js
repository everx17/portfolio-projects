import {StyleSheet} from 'react-native';
import {AppColors, AppFonts, normalized,normalizedFont} from '../../utils/AppConstants';

const styles = StyleSheet.create({
  txtInp: {
    borderWidth: 2,
    borderColor: AppColors.primaryColor.darkBlack,
    borderRadius: 15,
    height: normalized.hp('7%'),
    color: AppColors.primaryColor.darkBlack,
    width: '80%',
    paddingLeft: normalized.wp('5%'),
    fontSize: AppFonts.commonFont.small,
    backgroundColor:AppColors.primaryColor.darkWhite,
    marginHorizontal:normalized.hp('2%'),
    marginBottom:normalized.hp('-3%')
    

  },

  txtInpwidthHeig: {
    color: AppColors.primaryColor.darkBlack,
    width: '100%',
    borderWidth: 2,
    paddingLeft: normalized.wp('5%'),
    borderColor: 'transparent',
    fontSize: AppFonts.commonFont.small,
    borderRadius: 15,
    height: normalized.hp('7%'),
  },
});

export default styles;
