import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBar, LabelledInput, LongButton } from '../../../shared';
import { styles } from './style';
import Progress from 'react-native-progress/Bar';
import { hp, wp } from '../../../shared/responsive-dimension';
import { normalColors as colors } from '../../../colors';
import { images } from '../../../images';

const { illustrations } = images;

const AddMoney = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar hasBackButton headerTitle="Add Money" />
      <View style={styles.bottomContainer}>
        <Text style={styles.questionCount}>Question 3 of 4</Text>
        <View style={{ paddingTop: hp(11) }}>
          <Progress
            width={wp(335)}
            height={hp(10)}
            color={colors.taelDark}
            unfilledColor={colors.tael}
            borderColor={colors.tael}
            borderRadius={hp(10)}
            progress={0.75}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.planName}>
          How often do you want to add money to this goal?
        </Text>
        <Text style={styles.text}>You can update this setting later.</Text>
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
        <View style={{ marginTop: hp(40) }}>
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

export default AddMoney;
