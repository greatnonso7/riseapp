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
    marginHorizontal: hp(25),
    marginVertical: hp(20),
    marginTop: hp(40),
  },
  formContainer: {
    marginTop: hp(10),
  },

  dollarText: {
    ...main.regularText16,
  },
  nairaAmount: { ...main.regularText13 },
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomWidth: 0.6,
    paddingBottom: hp(18),
    borderBottomColor: '#838F91',
  },

  accountText: {
    ...main.regularText16,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
