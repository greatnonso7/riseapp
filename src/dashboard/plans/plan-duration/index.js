import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBar, LabelledInput, LongButton } from '../../../shared';
import { styles } from './style';
import Progress from 'react-native-progress/Bar';
import { hp, wp } from '../../../shared/responsive-dimension';
import { normalColors as colors } from '../../../colors';

const PlanDuration = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar hasBackButton />
    </SafeAreaView>
  );
};

export default PlanDuration;
