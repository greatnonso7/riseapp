import { StyleSheet } from 'react-native';
import { wp, hp, getBottomSpace } from '../responsive-dimension';
import { normalColors as colors } from '../../colors';
import { globalStyle } from '../../style';

const { main } = globalStyle(colors);

export const styles = StyleSheet.create({
  eyeIcon: {
    height: wp(24),
    width: wp(24),
  },
  rightIconContainer: {
    position: 'absolute',
    right: wp(10),
  },
  subtitleText: {
    paddingTop: hp(20),
    ...main.regularText16,
    marginBottom: hp(15),
    padding: 0,
  },
  labelText: {
    ...main.lightText16,
    color: colors.grey600,
  },
  multilineContainer: {
    height: hp(56 * 2),
  },
  multilineInput: {
    height: hp(56 * 1.5),
  },
  container: {
    width: wp(327),
    height: hp(56),
    paddingHorizontal: wp(12),
    marginBottom: hp(16),
    backgroundColor: colors.lightGray,
    borderColor: 'rgba(230, 245, 246, 0.6)',
    justifyContent: 'center',
    borderWidth: 1,
    paddingVertical: hp(8),
  },
  inputBox: {
    height: hp(30),
    padding: 0,
    width: '100%',
    ...main.semiBoldText16,
  },
  //drop-down styles
  androidPicker: {
    backgroundColor: 'transparent',
    width: '100%',
    height: hp(50),
    opacity: 0,
    // borderWidth: 1,
  },
  iOSpicker: {
    width: '100%',
    height: hp(100),
    marginBottom: 100,
  },
  pickerWrapper: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
    height: hp(50),
  },
  arrowIcon: {
    height: wp(10),
    width: wp(20),
    position: 'absolute',
    right: wp(16),
    top: hp(23),
  },
  buttonTextOne: {
    ...main.regularText16,
    color: colors.red500,
  },
  buttonTextTwo: {
    ...main.regularText16,
    color: colors.white,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: hp(16),
  },
  secondaryButton: {
    width: wp(187),
    height: hp(56),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red500,
  },
  primaryButton: {
    width: wp(188),
    height: hp(56),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalBody: {
    width: '100%',
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
    borderBottomWidth: getBottomSpace(),
    borderBottomColor: colors.white,
  },
});
