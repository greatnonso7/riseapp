import { StyleSheet, Platform } from 'react-native';
import { wp, hp } from '../../shared/responsive-dimension';
import { globalStyle } from '../../style';
import { normalColors as colors } from '../../colors';

const { main } = globalStyle(colors);

export const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
  },
  footerButtonContainer: {
    marginBottom: hp(50),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  footerButtonText: {
    ...main.regularText10,
    color: colors.red500,
    marginHorizontal: wp(4),
  },
  smallText: {
    ...main.regularText10,
    color: colors.grey900,
  },
  normText: {
    ...main.regularText12,
    color: colors.grey900,
  },
  createText: {
    ...main.regularText12,
    color: colors.red500,
    marginLeft: wp(4),
  },
  createAccountContainer: {
    marginVertical: hp(24),
    flexDirection: 'row',
    // borderWidth: 1,
    alignSelf: 'center',
  },
  loginButton: {
    backgroundColor: colors.taelDark,
    marginTop: hp(16),
  },
  titleContainer: {
    marginLeft: wp(20),
    marginTop: hp(50),
  },
  formContainer: {
    height: hp(374),
    width: '100%',
    paddingHorizontal: wp(20),
    paddingTop: hp(24),
    alignItems: 'center',
  },
  subtitleText: {
    ...main.regularText16,
  },
  titleText: {
    ...main.boldText28,
  },
  body: {},
  circleOfCircles: {
    width: hp(440),
    height: hp(440),
    position: 'absolute',
    zIndex: -100,
    top: hp(44),
    right: -hp(193),
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
