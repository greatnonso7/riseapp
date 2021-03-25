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
        <Text style={styles.headerTitle}>
          Choose a memorable image for this plan.
        </Text>
        <TouchableOpacity activeOpacity={0.6} style={styles.interestContainer}>
          <Image
            source={icons.image}
            resizeMode="contain"
            style={{ height: hp(30), width: wp(30) }}
          />
          <Text style={styles.imageText}>Tap here to choose an image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.deleteTextContainer}>
          <Text style={styles.deleteText}>Delete this image?</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: hp(35),
          left: wp(23),
        }}>
        <LongButton onPress={() => navigate('PickImage')} title={'Continue'} />
        <TouchableOpacity style={styles.deleteTextContainer}>
          <Text style={styles.skipText}>Skip This</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddImage;
