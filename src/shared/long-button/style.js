import { StyleSheet } from 'react-native';
import { wp, hp } from '../responsive-dimension';
import { globalStyle } from '../../style';
import { normalColors as colors } from '../../colors';

const { main } = globalStyle(colors);

//
export const styles = StyleSheet.create({
  buttonTitle: {
    ...main.semiBoldText20,
    color: colors.white,
    alignSelf: 'center',
  },
  longButton: {
    backgroundColor: colors.red,
    borderRadius: wp(4),
    width: wp(327),
    height: hp(56),
  },
});
