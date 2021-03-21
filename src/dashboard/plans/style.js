import { StyleSheet } from 'react-native';
import { wp, hp } from '../../shared/responsive-dimension';
import { normalColors as colors } from '../../colors';
import { globalStyle } from '../../style';

const { main } = globalStyle(colors);

export const styles = StyleSheet.create({
  arrow: {
    width: wp(6),
    height: hp(10),
  },
  walletText: {
    ...main.lightText16,
    fontSize: 20,
  },
  walletInfo: {
    backgroundColor: 'rgba(131, 143, 145, 0.05)',
    paddingHorizontal: hp(10),
    borderTopLeftRadius: hp(10),
    borderTopRightRadius: hp(10),
  },
  wallet: {
    height: wp(38),
    width: wp(38),
    position: 'relative',
    top: hp(20),
    right: wp(15),
    resizeMode: 'contain',
  },
  walletAmount: {
    ...main.boldText28,
    fontSize: 35,
    paddingLeft: hp(20),
    marginBottom: hp(20),
  },
  bottomContainer: {
    backgroundColor: colors.tael,
    height: hp(30),
    justifyContent: 'center',
    borderBottomLeftRadius: hp(10),
    borderBottomRightRadius: hp(10),
  },
  accountText: {
    ...main.boldText16,
    color: colors.taelDark,
    textAlign: 'center',
  },
  eyeClose: {
    width: wp(25),
    height: hp(17),
    marginLeft: hp(10),
  },

  balanceText: {
    ...main.boldText24,
    paddingTop: hp(10),
  },
  sectionLabel: {
    ...main.regularText16,
    marginRight: wp(50),
  },
  percentText: {
    ...main.regularText14,
    color: colors.green500,
    // borderWidth: 1,
  },
  balance: {
    width: '100%',
    paddingRight: 150,
  },

  transactionContainer: {
    marginHorizontal: hp(20),
  },
  transactText: {
    ...main.regularText18,
  },
  transactDate: {
    ...main.regularText14,
  },
  status: {
    ...main.regularText14,
  },
  transactionList: {
    borderBottomWidth: 0.3,
    borderBottomColor: '#B5B5B5',
    marginBottom: hp(10),
    paddingBottom: hp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amount: {
    ...main.boldText20,
    paddingVertical: hp(10),
  },
  transactView: {
    ...main.regularText16,
    color: colors.taelDark,
    paddingTop: hp(5),
  },
  buttonContainer: {
    marginHorizontal: hp(20),
    marginVertical: hp(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: wp(160),
    height: hp(65),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(6),
  },
  text: {
    ...main.boldText16,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
