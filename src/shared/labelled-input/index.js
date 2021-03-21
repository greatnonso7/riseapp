import React, { useState } from 'react';
import { TextInput, Text, Image } from 'react-native';
import { View, ViewStyle, TextStyle, TextInputProps } from 'react-native';
import { normalColors as colors } from '../../colors';
import { images } from '../../images';
import TouchItem from '../touch-item';
import { styles } from './style';

interface LabelledInputProps {
  label: string;
  labelStyle: TextStyle;
  containerStyle: ViewStyle;
  inputStyle: ViewStyle;
  value: string;
  onPress: Function;
}
type Props = LabelledInputProps & TextInputProps;

const LabelledInput: React.FC<Props> = React.forwardRef(
  (
    {
      label,
      labelStyle,
      onPress,
      containerStyle,
      inputStyle,
      multiline,
      value,
      isPassword,
      ...rest
    },
    ref,
  ) => {
    const [isTyping, setTypingState] = useState(false);
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const { eyeClose } = images.icons;
    let showLabel = value || isTyping;
    return (
      <View
        style={[
          styles.container,
          multiline && styles.multilineContainer,
          containerStyle,
        ]}>
        {showLabel && <Text style={styles.labelText}>{label}</Text>}
        <TextInput
          placeholder={!isTyping ? label : ''}
          placeholderTextColor={colors.grey700}
          onFocus={() => setTypingState(true)}
          onBlur={() => setTypingState(false)}
          underlineColorAndroid="transparent"
          value={value}
          style={[
            styles.inputBox,
            multiline && styles.multilineInput,
            inputStyle,
          ]}
          ref={ref}
          multiline={multiline}
          secureTextEntry={isPassword && !isPasswordVisible}
          {...rest}
        />
        {isPassword && (
          <TouchItem
            style={styles.rightIconContainer}
            onPress={() => setPasswordVisible(!isPasswordVisible)}>
            <Image style={styles.eyeIcon} source={eyeClose} />
          </TouchItem>
        )}
      </View>
    );
  },
);

export default LabelledInput;
