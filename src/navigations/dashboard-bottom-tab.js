import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { images } from '../images';
import { normalColors as colors } from '../colors';
import { getBottomSpace, hp } from '../shared/responsive-dimension';
import Dashboard from '../dashboard/home';
import Plan from '../dashboard/plan';

const { icons } = images;

const TabIcon = ({ isFocused, icon }) => {
  return (
    <Image
      source={icon}
      style={[
        { width: hp(20), height: hp(20), marginBottom: hp(2) },
        isFocused && { tintColor: colors.taelDark },
      ]}
    />
  );
};

const Tab = createBottomTabNavigator();

const DashboardBottomTab = ({ route }) => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: colors.taelDark,
        inactiveTintColor: colors.grey400,
        labelStyle: {
          fontFamily: 'Galion-Medium',
          fontSize: hp(12),
          lineHeight: hp(16),
        },
        tabStyle: {
          height: hp(56),
          paddingVertical: hp(5),
        },
        style: {
          backgroundColor: colors.white,
          height: hp(56) + getBottomSpace(),
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home} isFocused={focused} />
          ),
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.plan} isFocused={focused} />
          ),
        }}
        name="Plan"
        component={Plan}
      />
    </Tab.Navigator>
  );
};

export default DashboardBottomTab;
