import React from 'react';
import { View, Text } from 'react-native';
import { LabelledInput, LongButton } from '../../shared';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './style';
import { isIOS } from '../../utils/helpers';
import { hp } from '../../shared/responsive-dimension';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [currentInput, setCurrentInput] = React.useState('');

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
        <LabelledInput
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
        <LabelledInput
          label="Password"
          containerStyle={{ marginBottom: hp(12) }}
          scrollEnabled={true}
          isPassword
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="email"
          numberOfLines={1}
        />
        <LongButton
          onPress={() => navigation.navigate('Dashboard', { screen: 'Home' })}
          buttonStyle={styles.loginButton}
          title={'Sign in'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
