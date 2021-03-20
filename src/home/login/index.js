import React from 'react';
import { View, Text } from 'react-native';
import { AuthInput, LongButton } from '../../shared';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { normalColors as colors } from '../../colors';
import { styles } from './style';
import { isIOS } from '../../utils/helpers';
import { hp, wp } from '../../shared/responsive-dimension';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const [currentInput, setCurrentInput] = React.useState('');

  var extraHeight = isIOS
    ? currentInput === 'first'
      ? hp(140)
      : hp(70)
    : -hp(118);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Welcome Back</Text>
        <Text style={styles.subtitleText}>
          Let’s get you logged in to get back to building {'\n'} your
          dollar-denominated investment portfolio.
        </Text>
      </View>
      <View style={styles.formContainer}>
        <AuthInput
          label="Email Address"
          containerStyle={{ marginBottom: hp(12) }}
          scrollEnabled={true}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="email"
          numberOfLines={1}
        />
        <AuthInput
          label="Email Address"
          containerStyle={{ marginBottom: hp(12) }}
          scrollEnabled={true}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="email"
          numberOfLines={1}
        />
        <LongButton buttonStyle={styles.loginButton} title={'Sign in'} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
