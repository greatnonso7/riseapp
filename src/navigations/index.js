import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { HomeRoutes } from './home-navigation';
import Onboarding from './home-navigation';
import { connect } from 'react-redux';
import { getData, storeData } from '../utils/async-cache';

const Stack = createSharedElementStackNavigator();

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
