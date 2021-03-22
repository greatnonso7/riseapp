import { StyleSheet } from 'react-native';
import { wp, hp, deviceWidth } from '../../shared/responsive-dimension';
import { normalColors as colors } from '../../colors';
import { globalStyle } from '../../style';
import DeviceInfo from 'react-native-device-info';

const { main } = globalStyle(colors);

export const styles = StyleSheet.create({
  debitCard: {
    ...main.regularText14,
  },
  walletContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  bottomContainer: {
    marginHorizontal: hp(20),
    marginVertical: hp(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.white,
    position: 'absolute',
    top: DeviceInfo.hasNotch() ? hp(40) : hp(35),
    left: deviceWidth * 0.24,
    borderColor: '#E6F5F6',
    borderWidth: hp(1),
    borderRadius: hp(8),
  },
  riseRate: {
    ...main.regularText12,
    padding: hp(10),
  },
  whyRateContainer: {
    backgroundColor: '#E6F5F6',
    height: hp(39),
  },
  whyRate: {
    ...main.regularText12,
    padding: hp(10),
    color: colors.taelDark,
  },
  addMoney: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(45),
    width: wp(337),
    backgroundColor: colors.taelDark,
    marginTop: hp(30),
    borderRadius: hp(10),
  },
  addMoneyText: {
    ...main.boldText16,
    color: colors.white,
  },
  accountText: {
    ...main.boldText16,
    color: colors.taelDark,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
