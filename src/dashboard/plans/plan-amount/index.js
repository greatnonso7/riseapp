/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
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
        <View>
          {Values.map(item => (
            <TouchableOpacity
              onPress={() => console.log(item.id)}
              key={item.id}
              style={styles.interestContainer}>
              <Image
                style={styles.radio}
                resizeMode="contain"
                source={item.radio}
              />
              <Text style={styles.durationText}>{item.duration}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            marginTop: hp(40),
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
