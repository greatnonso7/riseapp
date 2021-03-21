/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBar, LongButton } from '../../shared';
import { styles } from './style';
import { images } from '../../images';
import { hp, wp, screenHeight } from '../../shared/responsive-dimension';

const { icons, illustrations } = images;

const RealEstate = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar
        leftIcon={icons.close}
        hasBackButton
        headerTitle="Real Estate"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.text}>
          Invest in a portfolio of rented buildings {'\n'} across the US and
          earn a low-risk annual {'\n'} return of 13-15%.
        </Text>
        <Image
          source={illustrations.realEstate}
          resizeMode="contain"
          style={{ width: wp(212), height: hp(124), alignSelf: 'center' }}
        />
      </View>
      <View style={styles.questionsContainer}>
        {Questions.map(item => (
          <View
            key={item.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: hp(16),
            }}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={styles.icons}
            />
            <View>
              <Text style={styles.question}>{item.question}</Text>
              <Text style={styles.answer}>{item.answer}</Text>
            </View>
          </View>
        ))}
      </View>
      <View
        style={{
          marginHorizontal: hp(25),
          position: 'relative',
          justifyContent: 'center',
        }}>
        <LongButton
          title={'Get Started'}
          buttonStyle={styles.buttonContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const Questions = [
  {
    id: 1,
    icon: icons.question,
    question: 'Answer a few questions',
    answer:
      'Let’s help you tailor your plan to help you \nachieve financial freedom.',
  },
  {
    id: 2,
    icon: icons.calender,
    question: 'Fund periodically',
    answer:
      'Daily, weekly, monthly? It’s totally up to you. \nTell us how often you’ll like to add  \nto your plan.',
  },
  {
    id: 3,
    icon: icons.settings,
    question: 'Adjust when needed',
    answer:
      'You have control over how you build wealth. \nYou can adjust your plan as you please.',
  },
];

export default RealEstate;
