/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBar } from '../../shared';
import { styles } from './style';
import { images } from '../../images';
import { hp, wp } from '../../shared/responsive-dimension';

const { icons } = images;

const DebitCard = ({ navigation: { navigate, goBack } }) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar
        onPressLeftIcon={() => goBack()}
        hasBackButton
        headerTitle="Debit Card"
      />
      <View style={styles.bottomContainer}>
        <Text style={styles.debitCard}>Your Debit Card</Text>
        <Image
          source={icons.rightArrow}
          resizeMode="contain"
          style={{ width: wp(30), height: hp(30) }}
        />
        <View style={styles.walletContainer}>
          <Text style={styles.debitCard}>Rise Wallet</Text>
          <Text style={[styles.debitCard, { color: '#838F91' }]}>$20.34</Text>
        </View>
      </View>
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
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.addMoney}>
          <Text style={styles.addMoneyText}>Add Money</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DebitCard;
