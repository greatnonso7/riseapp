/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBar, LongButton } from '../../../shared';
import { styles } from './style';
import Progress from 'react-native-progress/Bar';
import { hp, wp } from '../../../shared/responsive-dimension';
import { normalColors as colors } from '../../../colors';
import { images } from '../../../images';

const { illustrations } = images;

const PlanAmount = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar hasBackButton headerTitle="Add Money" />
      <View style={styles.bottomContainer}>
        <Text style={styles.questionCount}>Question 4 of 4</Text>
        <View style={{ paddingTop: hp(11) }}>
          <Progress
            width={wp(335)}
            height={hp(10)}
            color={colors.taelDark}
            unfilledColor={colors.tael}
            borderColor={colors.tael}
            borderRadius={hp(10)}
            progress={1}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.planName}>How much can you add monthly?</Text>
        <Text style={styles.updateText}>You can always update this later.</Text>
        <View style={styles.formContainer}>
          <View style={styles.amountHolder}>
            <Text style={styles.nairaText}>₦</Text>
            <Text style={styles.nairaAmount}>4,200.00</Text>
          </View>
          <View
            style={[
              styles.amountHolder,
              { backgroundColor: 'rgba(131, 143, 145, 0.05)', height: hp(69) },
            ]}>
            <Text style={styles.dollarText}>$</Text>
            <TextInput style={styles.dollarAmount} value={'10.00'} />
          </View>
          <View style={styles.rateContainer}>
            <Text style={styles.riseRate}>$1 = ₦420</Text>
            <View style={styles.whyRateContainer}>
              <Text style={styles.whyRate}>Why this rate?</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: hp(10),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{ marginHorizontal: hp(10) }}>
            <Text style={styles.text}>
              This plan will be denominated in USD. Exchange rate shown is not
              fixed by Rise and will fluctuate over the period of your plan.
            </Text>
          </View>
          <LongButton title={'Continue'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const Values = [
  {
    id: 1,
    duration: 'Daily',
    radio: illustrations.radioOff,
  },
  {
    id: 2,
    duration: 'Weekly',
    radio: illustrations.radioOn,
  },
  {
    id: 3,
    duration: 'Monthly',
    radio: illustrations.radioOff,
  },
];

export default PlanAmount;
