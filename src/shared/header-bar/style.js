import { StyleSheet } from 'react-native';
import {
  wp,
  hp,
  deviceWidth,
  getStatusBarHeight,
} from '../responsive-dimension';
import { normalColors as colors } from '../../colors';

import { globalStyle } from '../../style';
import { isIOS } from '../../utils/helpers';
const { main } = globalStyle(colors);

export const styles = StyleSheet.create({
  headerTitle: {
    ...main.boldText24,
    fontSize: 36,
    color: 'black',
    paddingBottom: hp(20),
  },
  headerLeftTitle: {
    ...main.boldText28,
    paddingTop: hp(20),
  },
  headerRightTitle: {
    ...main.boldText24,
    fontSize: 36,
    textAlign: 'left',
    paddingBottom: hp(20),
  },
  headerButtonTitle: {
    ...main.regularText16,
    color: colors.grey600,
  },
  headerRightIcon: {
    height: hp(24),
    width: hp(24),
    resizeMode: 'contain',
  },
  headerLeftIcon: {
    height: hp(44),
    width: hp(44),
    resizeMode: 'contain',
  },
  headerLeftIconContainer: {
    position: 'absolute',
    left: wp(16),
  },
  headerRightIconContainer: {
    position: 'absolute',
    right: wp(20),
  },
  navBar: {
    width: '100%',
    backgroundColor: colors.headerBg,
    height: hp(52),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: wp(20),
  },
  headerContainer: {
    width: deviceWidth,
    backgroundColor: colors.headerBg,
    paddingTop: isIOS ? getStatusBarHeight(true) : 0,
  },
  buttonContainer: {
    width: wp(75),
    height: hp(60),
    justifyContent: 'flex-end',
    opacity: 0.8,
    paddingBottom: hp(14),
    paddingLeft: wp(12),
  },
});
