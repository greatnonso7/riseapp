import { StyleSheet } from 'react-native';
import { wp, hp } from '../resposive-dimension';
import { normalColors as colors } from '../../colors';

import { globalStyle } from '../../style';

const { main } = globalStyle(colors);
export const styles = StyleSheet.create({
  inputLabel: {
    ...main.regularText16,
    width: wp(100),
    // borderWidth: 1,
  },
  headerRightIcon: {
    height: wp(20),
    width: wp(20),
    resizeMode: 'contain',
    // borderWidth: 1,
  },
  rightIcon: {
    height: wp(24),
    width: wp(24),
    resizeMode: 'contain',
    // tintColor: '',
  },
  rightIconContainer: {
    position: 'absolute',
    right: wp(11),
  },
  inputBox: {
    // backgroundColor: colors.headerBg,
    height: hp(44),
    ...main.regularText16,
    padding: 0,
    width: '100%',
    // borderWidth: 1,
  },
  inputContainer: {
    width: wp(327),
    height: hp(56),
    paddingHorizontal: wp(12),
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    backgroundColor: colors.lightGray,
  },
});
