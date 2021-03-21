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
  text: {
    ...main.regularText17,
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp(30),
    marginTop: hp(16),
  },
  card: {
    height: hp(80),
    width: wp(80),
    backgroundColor: '#E6F5F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(5),
    borderWidth: hp(1),
    borderColor: '#0898A0',
  },
  time: {
    ...main.boldText28,
    color: '#838F91',
  },
  months: {
    ...main.regularText16,
    opacity: 0.5,
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
