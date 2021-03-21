/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBar } from '../../shared';
import { styles } from './style';
import { images } from '../../images';
import { hp, wp } from '../../shared/responsive-dimension';

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
    </SafeAreaView>
  );
};

export default RealEstate;
