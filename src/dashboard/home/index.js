/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBar } from '../../shared';
import { normalColors as colors } from '../../colors';
import { styles } from './style';
import { images } from '../../images';
import { hp, wp } from '../../shared/responsive-dimension';

const { icons } = images;

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar headerTitle="Wallet" />
      <View style={styles.walletContainer}>
        <View style={styles.walletInfo}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: hp(20),
              }}>
              <Text style={styles.walletText}>Wallet Balance</Text>
              <Image source={icons.eyeClose} style={styles.eyeClose} />
            </View>
            <Image source={icons.wallet} style={styles.wallet} />
          </View>
          <Text style={styles.walletAmount}>$100,930.75</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.accountText}>View Account Numbers</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.button, { backgroundColor: colors.tael }]}>
          <Text style={[styles.text, { color: colors.taelDark }]}>
            Send Money
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.button, { backgroundColor: colors.taelDark }]}>
          <Text style={[styles.text, { color: colors.white }]}>
            Fund Wallet
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.transactionContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.transactText}>Recent Transactions</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.transactView}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={Data}
          renderItem={({ item }) => (
            <View style={styles.transactionList}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={item.image}
                  style={{ width: wp(38), height: hp(38) }}
                />
                <View style={{ paddingLeft: hp(10) }}>
                  <Text>{item.type}</Text>
                  <Text>{item.date}</Text>
                </View>
              </View>
              <View>
                <Text style={styles.amount}>{item.amount}</Text>
              </View>
            </View>
          )}
          scrollEnabled
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
    type: 'Deposit',
    date: 'Apr 28, 2020',
    amount: '+ $2,605',
    image: icons.deposit,
  },
  {
    id: '2',
    type: 'Withdrawal',
    date: 'Apr 26, 2020',
    amount: '- $48',
    image: icons.withdrawal,
  },
  {
    id: '3',
    type: 'Transfer to Eke',
    date: 'Apr 21, 2020',
    amount: '- $26',
    image: icons.transfer,
  },
  {
    id: '4',
    type: 'Deposit',
    date: 'Apr 28, 2020',
    amount: '$200',
    image: icons.failedDeposit,
    status: 'Failed',
    statusColor: colors.red,
  },
  {
    id: '5',
    type: 'Transfer to Plan',
    date: 'Apr 26, 2020',
    amount: '- $92',
    image: icons.transferPlan,
  },
  {
    id: '6',
    type: 'Transfer to Bank Account',
    date: 'Apr 21, 2020',
    amount: '- $200',
    image: icons.pending,
    status: 'Pending',
    statusColor: colors.warning,
  },
];

export default Dashboard;
