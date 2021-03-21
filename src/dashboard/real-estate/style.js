import { StyleSheet } from 'react-native';
import { wp, hp, screenWidth } from '../../shared/responsive-dimension';
import { normalColors as colors } from '../../colors';
import { globalStyle } from '../../style';
import DeviceInfo from 'react-native-device-info';
import { isIOS } from '../../utils/helpers';

const { main } = globalStyle(colors);

export const styles = StyleSheet.create({
  infoContainer: {
    marginVertical: hp(20),
    marginHorizontal: hp(25),
  },

  buttonContainer: {},

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
    height: isIOS ? screenWidth - hp(20) : screenWidth + hp(30),
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
    height: '100%',
  },
});
