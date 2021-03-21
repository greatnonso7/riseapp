import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNav from './onboarding';
import DashboardBottomTab from './dashboard/dashboard-bottom-tab';

const Stack = createStackNavigator();

const AppNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthName"
        options={{ headerShown: false }}
        component={AuthNav}
      />
      <Stack.Screen
        name="Dashboard"
        options={{ headerShown: false }}
        component={DashboardBottomTab}
      />
    </Stack.Navigator>
  );
};

export default AppNav;
