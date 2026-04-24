import {StyleSheet} from 'react-native';
import {
  AppColors,
  AppFonts,
  normalized,
  dimensionized,
} from '../../utils/AppConstants';

const styles = StyleSheet.create({
  headerStyle: {
    height: normalized.hp('12%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTitle: {
    color: AppColors.primaryColor.darkWhite,
    fontWeight: '600',
    fontSize: AppFonts.commonFont.medium,
    bottom: -30,
  },
  headerStyle1: {
    height: normalized.hp('12%'),
    justifyContent: 'center',
  },
  txtTitle1: {
    color: AppColors.primaryColor.darkWhite,
    fontWeight: '600',
    fontSize: AppFonts.commonFont.medium,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: -30,
    paddingHorizontal: normalized.wp('5%'),
    alignItems: 'center',
  },
  innerImg: {
    width: '100%',
    height: '100%',
    borderRadius: 90,
  },
  wrapImg: {
    height: dimensionized.SCREEN_WIDTH / 12,
    width: dimensionized.SCREEN_WIDTH / 12,
    borderRadius: 90,
  },
});

export default styles;
