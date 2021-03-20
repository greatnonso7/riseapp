import { styles } from './style';
import React from 'react';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';

const LongButton = ({
  buttonStyle,
  titleStyle,
  disabledTitleStyle,
  ...rest
}) => {
  return (
    <Button
      {...rest}
      type="solid"
      activeOpacity={0.8}
      buttonStyle={[styles.longButton, buttonStyle]}
      titleStyle={[styles.buttonTitle, titleStyle]}
      disabledTitleStyle={[{ color: 'white' }, disabledTitleStyle]}
      disabledStyle={[{ backgroundColor: '#dbdae6' }, disabledTitleStyle]}
    />
  );
};

LongButton.propTypes = {
  buttonStyle: ViewPropTypes.style,
  title: PropTypes.string,
  titleStyle: PropTypes.any,
  disabledTitleStyle: ViewPropTypes.style,
  onPress: PropTypes.func,
};

export default LongButton;
