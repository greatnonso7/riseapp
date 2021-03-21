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
    ...main.semiBoldText20,
    paddingBottom: hp(11),
  },
  percentContainer: {
    position: 'absolute',
    bottom: hp(50),
    right: hp(14),
    height: hp(20),
    width: hp(75),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(10),
    backgroundColor: colors.green,
  },
  percent: {
    ...main.semiBoldText12,
    color: colors.white,
  },
  container: {
    flex: 1,
    paddingTop: DeviceInfo.hasNotch() ? 0 : hp(25),
    backgroundColor: colors.white,
  },
});
