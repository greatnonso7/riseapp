import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeRoutes } from './home-navigation';
import Onboarding from './home-navigation';
import { connect } from 'react-redux';
import { getData, storeData } from '../utils/async-cache';

const Stack = createStackNavigator();

const AppNav = () => {
  return (
    <NavigationContainer>
      <Stack.Screen
        name="Onboarding"
        options={{ headerShown: false }}
        component={Onboarding}
      />
    </NavigationContainer>
  );
};

export default AppNav;
