import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBar } from '../../../shared';
import { styles } from './style';
import { images } from '../../../images';
import { hp, wp } from '../../../shared/responsive-dimension';

const { plans } = images;

const AllPlans = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar hasBackButton headerTitle="Your Plans" />
      <View style={{ marginTop: hp(20) }}>
        <FlatList
          data={Data}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.bottomContainer}>
              <Image
                source={item.image}
                resizeMode={'contain'}
                style={{ width: wp(163), height: hp(101) }}
              />
              <View style={styles.percentContainer}>
                <Text style={styles.percent}>{item.percent}</Text>
              </View>
              <Text style={styles.text}>{item.type}</Text>
              <Text style={styles.amount}>{item.amount}</Text>
            </View>
          )}
          numColumns={2}
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
    percent: '+ 3.2% today',
  },
  {
    id: '2',
    image: plans.plan2,
    type: 'Post Corona Trip',
    amount: '$552.83',
    percent: '+ 3.2% today',
  },
  {
    id: '3',
    image: plans.plan1,
    type: 'Build Wealth',
    amount: '$5,052.83',
    percent: '+ 3.2% today',
  },
  {
    id: '4',
    image: plans.plan2,
    type: 'Post Corona Trip',
    amount: '$552.83',
    percent: '+ 3.2% today',
  },
];

export default AllPlans;
