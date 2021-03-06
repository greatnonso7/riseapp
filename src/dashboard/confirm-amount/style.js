import { StyleSheet } from 'react-native';
import { wp, hp, deviceHeight } from '../../shared/responsive-dimension';
import { normalColors as colors } from '../../colors';
import { globalStyle } from '../../style';

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
    marginTop: hp(40),
    height: deviceHeight * 0.68,
  },
  formContainer: {
    marginTop: hp(10),
  },

  dollarText: {
    ...main.semiBoldText24,
    textAlign: 'center',
    paddingTop: hp(10),
  },
  nairaAmount: { ...main.semiBoldText24 },
  dollarAmount: {
    ...main.boldText36,
    fontWeight: '900',
    fontSize: 50,
    paddingBottom: hp(10),
    textAlign: 'center',
  },
  amountHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(16),
    paddingBottom: hp(15),
    borderBottomWidth: 0.6,
    borderBottomColor: '#B5B5B5',
  },
  rateContainer: {
    marginTop: hp(20),
    marginHorizontal: hp(15),
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
    ...main.regularText16,
    color: '#838F91',
  },
  accountText: {
    ...main.regularText16,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
