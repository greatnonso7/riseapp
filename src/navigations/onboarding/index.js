import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../home/login';

const Stack = createStackNavigator();

const Onboarding = () => {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default Onboarding;
