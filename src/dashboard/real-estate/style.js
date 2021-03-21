import { StyleSheet } from 'react-native';
import { wp, hp } from '../../shared/responsive-dimension';
import { normalColors as colors } from '../../colors';
import { globalStyle } from '../../style';
import DeviceInfo from 'react-native-device-info';

const { main } = globalStyle(colors);

export const styles = StyleSheet.create({
  arrow: {
    width: wp(6),
    height: hp(10),
    marginLeft: hp(3),
    marginTop: hp(4),
  },
  infoContainer: {
    marginVertical: hp(20),
    marginHorizontal: hp(25),
  },
  plansHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  plans: {
    ...main.semiBoldText20,
  },
  planText: {
    ...main.semiBoldText14,
    color: colors.taelDark,
  },
  bottomContainer: {
    backgroundColor: colors.tael,
    height: hp(30),
    justifyContent: 'center',
    borderBottomLeftRadius: hp(10),
    borderBottomRightRadius: hp(10),
  },

  balanceText: {
    ...main.boldText24,
    paddingTop: hp(10),
  },
  sectionLabel: {
    ...main.regularText16,
    marginRight: wp(50),
  },
  amount: {
    ...main.boldText16,
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
  question: {
    ...main.semiBoldText20,
    paddingLeft: hp(17),
  },
  answer: {
    paddingLeft: hp(17),
    flexShrink: 1,
    flexWrap: 'wrap',
    ...main.regularText14,
  },
  questionsContainer: {
    marginHorizontal: hp(20),
  },
  icons: {
    height: hp(45),
    width: wp(45),
    marginBottom: hp(20),
  },
  text: {
    ...main.regularText18,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    paddingTop: DeviceInfo.hasNotch() ? 0 : hp(15),
    backgroundColor: colors.white,
  },
});
