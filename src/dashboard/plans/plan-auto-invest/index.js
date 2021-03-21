import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBar, LongButton } from '../../../shared';
import { styles } from './style';
import { hp, wp } from '../../../shared/responsive-dimension';
import { normalColors as colors } from '../../../colors';

const AutoInvest = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar hasBackButton headerTitle="Auto-Invest" />
      <View style={styles.bottomContainer}>
        <View style={styles.interestContainer}>
          <Text style={styles.percentText}>$120.00</Text>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.returnsText}>Tap to edit</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.instructionText}>
          This amount will be automatically charged{'\n'} to your Rise Wallet.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AutoInvest;
