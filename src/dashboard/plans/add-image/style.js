import { StyleSheet } from 'react-native';
import { wp, hp } from '../../../shared/responsive-dimension';
import { normalColors as colors } from '../../../colors';
import { globalStyle } from '../../../style';
import DeviceInfo from 'react-native-device-info';

const { main } = globalStyle(colors);

export const styles = StyleSheet.create({
  bottomContainer: {
    marginHorizontal: hp(24),
    marginVertical: hp(15),
  },
  headerTitle: {
    ...main.regularText17,
    color: '#838F91',
    textAlign: 'center',
  },
  interestContainer: {
    width: wp(300),
    height: hp(169),
    backgroundColor: colors.tael,
    marginTop: hp(30),
    marginHorizontal: hp(15),
    borderRadius: hp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    ...main.regularText14,
    color: colors.taelDark,
    paddingTop: hp(8),
  },
  deleteTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp(18),
  },
  deleteText: {
    ...main.regularText14,
    color: colors.taelDark,
  },
  skipText: {
    ...main.semiBoldText18,
    color: colors.taelDark,
  },
  container: {
    flex: 1,
    paddingTop: DeviceInfo.hasNotch() ? 0 : hp(25),
    backgroundColor: colors.white,
  },
});
