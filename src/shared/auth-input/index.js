import React, { useState, useRef } from 'react';
import { TextInput, TextInputProps, Text, Image, View } from 'react-native';
import { images } from '../../images';
import TouchItem from '../touch-Item';
import { styles } from './style';
import { wp } from '../resposive-dimension';
import PropTypes from 'prop-types';
const { icons } = images;

const AuthInput: React.FC<TextInputProps> = React.forwardRef(
  (
    {
      label,
      secureTextEntry,
      containerStyle,
      hasRightIcon,
      isTyping,
      value,
      ...rest
    },
    ref,
  ) => {
    const [isPasswordVisible, toggleVisibility] = useState(secureTextEntry);
    const textInputRef = useRef(null);
    let showLabel = !(value || isTyping);

    return (
      <TouchItem
        onPress={() => textInputRef.current.focus()}
        style={[styles.inputContainer, containerStyle]}>
        <TextInput />
      </TouchItem>
    );
  },
);

AuthInput.propTypes = {
  ...TextInputProps,
};

export default AuthInput;
