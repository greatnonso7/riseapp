import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBar, LabelledInput, LongButton } from '../../../shared';
import { styles } from './style';
import Progress from 'react-native-progress/Bar';
import { hp, wp } from '../../../shared/responsive-dimension';
import { normalColors as colors } from '../../../colors';

const PlanName = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar hasBackButton headerTitle="Name Your Plan" />
      <View style={styles.bottomContainer}>
        <Text style={styles.questionCount}>Question 1 of 4</Text>
        <View style={{ paddingTop: hp(11) }}>
          <Progress
            width={wp(335)}
            height={hp(10)}
            color={colors.taelDark}
            unfilledColor={colors.tael}
            borderColor={colors.tael}
            borderRadius={hp(10)}
            progress={0.25}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.planName}>Give this plan a name</Text>
        <LabelledInput
          label="Plan Name"
          containerStyle={{ marginBottom: hp(12) }}
          scrollEnabled={true}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="email"
          numberOfLines={1}
        />
        <View style={{ marginTop: hp(16) }}>
          <LongButton title={'Continue'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlanName;
