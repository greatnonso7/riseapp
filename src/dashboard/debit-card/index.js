import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBar } from '../../shared';
import { styles } from './style';

const DebitCard = ({ navigation: { navigate, goBack } }) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar
        onPressLeftIcon={() => goBack()}
        hasBackButton
        headerTitle="Debit Card"
      />
      <Text>DebitCard</Text>
    </SafeAreaView>
  );
};

export default DebitCard;
