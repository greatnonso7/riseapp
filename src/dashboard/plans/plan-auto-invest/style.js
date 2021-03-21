import { StyleSheet } from 'react-native';
import { wp, hp, deviceWidth } from '../../../shared/responsive-dimension';
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
    alignItems: 'center',
    flexDirection: 'column',
    padding: hp(14),
    backgroundColor: 'rgba(131, 143, 145, 0.05)',
  },
  radio: {
    width: wp(15),
    height: hp(15),
    position: 'relative',
    right: hp(10),
  },
  updateText: {
    ...main.regularText12,
    color: '#838F91',
  },
  formContainer: {
    marginTop: hp(10),
  },
  nairaText: {
    ...main.semiBoldText28,
    paddingLeft: hp(20),
  },
  dollarText: {
    ...main.semiBoldText28,
    paddingLeft: hp(20),
  },
  nairaAmount: { ...main.semiBoldText24 },
  dollarAmount: { ...main.semiBoldText24, paddingBottom: hp(10) },
  amountHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(16),
    paddingRight: hp(15),
  },

  instructionText: {
    ...main.regularText16,
    color: '#838F91',
    textAlign: 'center',
    marginTop: hp(10),
    paddingBottom: hp(10),
    paddingRight: hp(10),
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
    ...main.regularText14,
    color: '#838F91',
  },
  durationText: {
    ...main.regularText17,
    color: '#838F91',
  },
  container: {
    flex: 1,
    paddingTop: DeviceInfo.hasNotch() ? 0 : hp(15),
    backgroundColor: colors.white,
  },
});
