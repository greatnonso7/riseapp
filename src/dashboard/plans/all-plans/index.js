import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBar } from '../../../shared';

const AllPlans = () => {
  return (
    <SafeAreaView>
      <HeaderBar hasBackButton />
    </SafeAreaView>
  );
};

export default AllPlans;
