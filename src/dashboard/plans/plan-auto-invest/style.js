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

  interestContainer: {
    borderRadius: hp(10),
    alignItems: 'center',
    flexDirection: 'column',
    padding: hp(14),
    backgroundColor: 'rgba(131, 143, 145, 0.05)',
  },

  arrow: {
    height: hp(15),
    width: wp(10),
    marginLeft: hp(15),
  },
  listContainer: {
    marginTop: hp(30),
    flexDirection: 'column',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.8,
    paddingBottom: hp(16),
    paddingTop: hp(16),
    borderBottomColor: '#B5B5B5',
  },
  instructionText: {
    ...main.regularText16,
    color: '#838F91',
    textAlign: 'center',
    marginTop: hp(10),
    paddingBottom: hp(10),
    paddingRight: hp(10),
  },
  columnText: {
    ...main.regularText16,
  },
  columnHeading: {
    ...main.regularText18,
    color: '#838F91',
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
