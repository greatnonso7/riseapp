import { StyleSheet } from 'react-native';
import { wp, hp } from '../../../shared/responsive-dimension';
import { normalColors as colors } from '../../../colors';
import { globalStyle } from '../../../style';
import DeviceInfo from 'react-native-device-info';

const { main } = globalStyle(colors);

export const styles = StyleSheet.create({
  bottomContainer: {
    marginHorizontal: hp(16),
    marginVertical: hp(20),
  },

  amount: {
    ...main.boldText16,
    paddingLeft: hp(11),
  },
  questionCount: {
    ...main.regularText16,
  },
  planName: {
    ...main.semiBoldText18,
    paddingBottom: hp(11),
  },
  interestContainer: {
    borderRadius: hp(10),
    backgroundColor: 'rgba(131, 143, 145, 0.05)',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(10),
    flexDirection: 'row',
    padding: hp(14),
    height: hp(82),
    width: wp(343),
  },
  percent: {
    ...main.semiBoldText12,
    color: colors.white,
  },
  percentText: {
    ...main.boldText30,
    color: colors.taelDark,
  },
  returnsText: {
    ...main.regularText16,
    color: colors.taelDark,
  },
  duration: {
    ...main.regularText18,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    paddingTop: DeviceInfo.hasNotch() ? 0 : hp(25),
    backgroundColor: colors.white,
  },
});
