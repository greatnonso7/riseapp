/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBar } from '../../shared';
import { styles } from './style';
import { images } from '../../images';
import { hp, wp } from '../../shared/responsive-dimension';

const { icons, plans } = images;

const Plan = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar headerLeft="Plans" />
      <View style={styles.planContainer}>
        <View style={styles.plansHeader}>
          <Text style={styles.plans}>Your Plans</Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            activeOpacity={0.3}>
            <Text style={styles.planText}>See All Your Plans</Text>
            <Image source={icons.arrow} style={styles.arrow} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={Data}
          renderItem={({ item }) => (
            <View style={{ marginTop: hp(10), marginLeft: item.left }}>
              <Image
                source={item.image}
                resizeMode="contain"
                style={{
                  width: hp(150),
                  height: wp(101),
                }}
              />
              <Text style={styles.text}>{item.type}</Text>
              <Text style={styles.amount}>{item.amount}</Text>
            </View>
          )}
          horizontal
          legacyImplementation={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const Data = [
  {
    id: '1',
    image: plans.plan1,
    type: 'Build Wealth',
    amount: '$5,052.83',
  },
  {
    id: '2',
    image: plans.plan2,
    type: 'Post Corona Trip',
    amount: '$552.83',
    left: 15,
  },
  {
    id: '3',
    image: plans.plan2,
    type: 'Post Corona Trip',
    amount: '$552.83',
    left: 15,
  },
];

export default Plan;
