import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';

const RealEstate = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Real Estate</Text>
    </SafeAreaView>
  );
};

export default RealEstate;
