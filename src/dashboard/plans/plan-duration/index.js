import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBar, LabelledInput, LongButton } from '../../../shared';
import { styles } from './style';
import Progress from 'react-native-progress/Bar';
import { hp, wp } from '../../../shared/responsive-dimension';
import { normalColors as colors } from '../../../colors';
import { images } from '../../../images';

const { icons } = images;

const PlanDuration = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar hasBackButton headerTitle="Duration" />
      <View style={styles.bottomContainer}>
        <Text style={styles.questionCount}>Question 2 of 4</Text>
        <View style={{ paddingTop: hp(11) }}>
          <Progress
            width={wp(335)}
            height={hp(10)}
            color={colors.taelDark}
            unfilledColor={colors.tael}
            borderColor={colors.tael}
            borderRadius={hp(10)}
            progress={0.5}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.planName}>How long do you want to invest for?</Text>
        <View style={styles.interestContainer}>
          <View>
            <Text style={styles.percentText}>15.0%</Text>
            <Text style={styles.returnsText}>Est. returns per annum</Text>
          </View>
          <View>
            <Image
              source={icons.bar}
              resizeMode="contain"
              style={{ width: wp(50), height: hp(40) }}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.duration}>Choose Duration</Text>
        <View style={styles.cardContainer}>
          {Duration.map(item => (
            <TouchableOpacity
              activeOpacity={0.6}
              key={item.id}
              style={styles.card}>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.months}>{item.duration}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>
          The longer you invest, the higher your potential returns. These
          estimates are based on historical results. Actual returns may vary.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const Duration = [
  {
    id: 1,
    time: 3,
    duration: 'Months',
  },
  { id: 2, time: 6, duration: 'Months' },
  {
    id: 3,
    time: 12,
    duration: 'Months',
  },
];

export default PlanDuration;
