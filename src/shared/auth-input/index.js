import React, { useState, useRef } from 'react';
import { TextInput, TextInputProps, Text, Image, View } from 'react-native';
import { images } from '../../images';
import TouchItem from '../touch-Item';
import { styles } from './style';
import { wp } from '../resposive-dimension';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

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
        {showLabel && <Text style={styles.inputLabel}>{label}</Text>}
        <TextInput
          value={value}
          secureTextEntry={isPasswordVisible}
          style={[
            styles.inputBox,
            showLabel && { width: '70%' },
            hasRightIcon && { width: wp(180) },
          ]}
          ref={textInputRef}
          {...rest}
        />
        {hasRightIcon && (
          <TouchItem
            onPress={() => toggleVisibility(!isPasswordVisible)}
            style={styles.rightIconContainer}>
            <Image
              source={
                isPasswordVisible ? icons.eyeClose : <IoniconsIcon name="eye" />
              }
            />
          </TouchItem>
        )}
      </TouchItem>
    );
  },
);

AuthInput.propTypes = {
  ...TextInputProps,
};

export default AuthInput;
