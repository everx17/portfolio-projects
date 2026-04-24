import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import {Dimensions} from 'react-native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const dimensionized = {SCREEN_WIDTH, SCREEN_HEIGHT};
export const normalized = {hp, wp};
export const normalizedFont = {rf};
export const AppFonts = {
  commonFont: {
    vxSmall:rf(1),
    smallest: rf(1.5),
    small: rf(2),
    medium: rf(2.5),
    large: rf(3),
    mediumLarge: rf(3.5),
    extraLarge: rf(5),
    
  },
};
export const AppIcons = {
  commonIcons: {
    smallest: 18,
    small: 24,
    medium: 25,
    large: 32,
    extraLarge: 30,
    vXLarge: rf(7),
  },
};

export const AppColors = {
  primaryColor: {
    darkBlack: '#000000',
    darkWhite: '#FFFFFF',
  },
  secondaryColor: {
    lightBlack: '#182233',
    shadedBlack: '#364257',
    lightWhite: '#C3CBD8',
    placeHolderCol: '#7587A6',
    darkBlue: '#3083FF',
  },
  radiantColor: {
    darkBlue: '#0551BF',
    white: '#FFFFFF',
    lightBlue: '#CADEFF',
    green: 'green',
    xanthous: '#f7b538',
    ocher: '#DB7C26',
    flame: '#D8572A',
    umber: '#D5A897',
    sepia: '#663100',
  },
  errorColor: {
    firered: '#CB0126',
  },
};
export {
  AntDesign,
  Feather,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  EvilIcons,
  MaterialCommunityIcons,
  Entypo,
  Ionicons
};
