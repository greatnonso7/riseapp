import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBar } from '../../../shared';
import { styles } from './style';

const PlanName = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar hasBackButton headerTitle="Name Your Plan" />
      <Text>Plan name</Text>
    </SafeAreaView>
  );
};

export default PlanName;
