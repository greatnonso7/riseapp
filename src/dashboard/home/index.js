import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBar } from '../../shared';

const Dashboard = () => {
  return (
    <SafeAreaView>
      <HeaderBar headerTitle="Wallet" />
    </SafeAreaView>
  );
};

export default Dashboard;
