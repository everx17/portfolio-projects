import {StyleSheet, Dimensions} from 'react-native';
import {
  AppColors,
  normalized,
  dimensionized,
} from '../../../utils/AppConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.primaryColor.darkWhite,
  },
  wrapImg: {
    height: dimensionized.SCREEN_WIDTH / 2,
    width: dimensionized.SCREEN_WIDTH / 2,
  },
  innerImg: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
