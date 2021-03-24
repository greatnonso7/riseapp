/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBar, LongButton } from '../../../shared';
import { styles } from './style';
import { hp, wp } from '../../../shared/responsive-dimension';
import { images } from '../../../images';

const { icons } = images;

const AddImage = ({ navigation: { navigate, goBack } }) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar
        onPressLeftIcon={() => goBack()}
        hasBackButton
        headerTitle="Auto-Invest"
      />
      <View style={styles.bottomContainer}>
        <View style={styles.interestContainer}>
          <Text style={styles.percentText}>$120.00</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigate('PlanAmount')}>
            <Text style={styles.returnsText}>Tap to edit</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.instructionText}>
          This amount will be automatically charged{'\n'} to your Rise Wallet.
        </Text>
        <View style={styles.listContainer}>
          <View style={styles.listItem}>
            <Text style={styles.columnHeading}>Start Immediately</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.columnText}>Yes</Text>
              <Image
                source={icons.arrow2}
                resizeMode="contain"
                style={styles.arrow}
              />
            </View>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.columnHeading}>Frequency</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.columnText}>Monthly / 28th of Month</Text>
              <Image
                source={icons.arrow2}
                resizeMode="contain"
                style={styles.arrow}
              />
            </View>
          </View>
          <View style={styles.listItem}>
            <View>
              <Text style={styles.columnHeading}>No Linked Card</Text>
              <Text style={styles.text}>
                Keep your investments going if your {'\n'}wallet balance it too
                low.
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.linkCard}>
                <Text
                  style={[styles.columnText, { color: 'white', fontSize: 14 }]}>
                  Link A Card
                </Text>
              </View>
              <Image
                source={icons.arrow2}
                resizeMode="contain"
                style={styles.arrow}
              />
            </View>
          </View>
        </View>
        <Text style={styles.settingText}>
          You can update these settings later.
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: hp(40),
          left: wp(23),
        }}>
        <LongButton onPress={() => navigate('PickImage')} title={'Continue'} />
      </View>
    </SafeAreaView>
  );
};

export default AddImage;
