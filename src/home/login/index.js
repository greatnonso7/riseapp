import React from 'react';
import { View, Text } from 'react-native';
import { AuthInput, LongButton } from '../../shared';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Login = () => {
  return (
    <KeyboardAwareScrollView>
      <AuthInput />
      <LongButton />
    </KeyboardAwareScrollView>
  );
};

export default Login;
