import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBar } from '../../shared';
import { styles } from './style';
import { images } from '../../images';
import { hp, wp } from '../../shared/responsive-dimension';

const { icons } = images;

const NairaCard = ({ navigation: { navigate, goBack } }) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar
        onPressLeftIcon={() => goBack()}
        hasBackButton
        headerTitle="Choose Naira Card"
      />
      <View style={styles.bottomContainer}>
        <View style={styles.rateContainer}>
          <Image
            source={icons.creditCard}
            resizeMode="contain"
            style={{ width: wp(40), height: hp(40) }}
          />
          <View style={{ paddingRight: hp(30) }}>
            <Text style={styles.dollarText}>Pay with a new Naira card</Text>
            <Text style={styles.nairaAmount}>
              We support Mastercard, Visa and Verve
            </Text>
          </View>
          <Image
            source={icons.arrow2}
            style={{ width: hp(10), height: hp(15) }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NairaCard;
