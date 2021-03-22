import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBar, LongButton } from '../../shared';
import { styles } from './style';

const ConfirmAmount = ({ navigation: { navigate, goBack } }) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar
        onPressLeftIcon={() => goBack()}
        hasBackButton
        headerTitle="Confirm Amount"
      />
      <View style={styles.bottomContainer}>
        <Text style={styles.dollarText}>
          ₦ <Text style={styles.dollarAmount}>4,263.00</Text>
        </Text>
        <View style={styles.rateContainer}>
          {Data.map(item => (
            <View style={styles.amountHolder} key={item.id}>
              <Text style={styles.addMoneyText}>{item.text}</Text>
              <Text style={styles.accountText}>{item.amount}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <LongButton
          onPress={() => navigate('NairaCard')}
          title={'Add ₦4,263'}
        />
      </View>
    </SafeAreaView>
  );
};

const Data = [
  {
    id: 1,
    text: 'Amount added to wallet',
    amount: '₦4,200.00',
  },
  {
    id: 2,
    text: 'Processing fee(1.5%)',
    amount: '₦63.00',
  },
  {
    id: 3,
    text: 'Amount in USD',
    amount: '$10.00',
  },
];

export default ConfirmAmount;
