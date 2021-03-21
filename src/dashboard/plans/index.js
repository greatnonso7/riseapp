import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBar } from '../../shared';
import { styles } from './style';
import { images } from '../../images';

const { icons } = images;

const Plan = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar headerLeft="Plans" />
      <View style={styles.planContainer}>
        <View>
          <Text>Your Plans</Text>
          <TouchableOpacity>
            <Text>See all your plans</Text>
            <Image source={icons.arrow} style={styles.arrow} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Plan;
