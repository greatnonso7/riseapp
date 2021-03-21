import { StyleSheet } from 'react-native';
import {
  wp,
  hp,
  paddingTopiOS,
  deviceWidth,
} from '../../shared/responsive-dimension';
import { normalColors as colors } from '../../colors';
import { globalStyle } from '../../style';

const { main } = globalStyle(colors);

export const styles = StyleSheet.create({
  walletContainer: {
    width: wp(343),
    height: hp(150),
    justifyContent: 'center',
    marginHorizontal: hp(16),
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
  imageRow: {
    height: wp(88),
    position: 'absolute',
    width: wp(140),
    zIndex: 1000,
    resizeMode: 'contain',
  },
  imageRowContainer: {
    // borderWidth: 1,
    // width: wp(88 * 2),
    overflow: 'visible',
    flex: 1,
    zIndex: 1000,
  },
  saleCount: {
    ...main.boldText16,
    marginRight: wp(20),
    color: colors.grey400,
  },
  saleLabel: {
    ...main.regularText16,
    marginRight: wp(20),
    color: colors.grey400,
  },
  durationText: {
    ...main.regularText14,
    // borderWidth: 1,
  },
  downIcon: {
    height: wp(12),
    width: wp(12),
    marginLeft: wp(10),
    tintColor: colors.red500,
    // borderWidth: 1,
  },
  durationButton: {
    width: wp(100),
    height: hp(35),
    borderWidth: wp(1.5),
    borderRadius: wp(4),
    borderColor: colors.red500,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress: {
    width: wp(100),
    backgroundColor: colors.red500,
  },
  growthBar: {
    width: wp(200),
    height: hp(5),
    backgroundColor: colors.grey300,
    borderRadius: wp(10),
  },
  row: {
    // justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowSpaced: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
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
  summaryBody: {
    width: '100%',
    paddingHorizontal: wp(20),
    backgroundColor: colors.white,
    flex: 1,
    marginTop: hp(3),
    paddingTop: hp(10),
  },
  servicesListContainer: {
    width: deviceWidth,
    backgroundColor: colors.white,
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
  header: {
    width: '100%',
    paddingTop: paddingTopiOS + hp(16),
    paddingBottom: hp(16),
    paddingHorizontal: wp(16),
    backgroundColor: colors.grey700,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  body: {
    backgroundColor: '#4ec3e0',
  },
});
