import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNav from './onboarding';
import DashboardBottomTab from './dashboard/dashboard-bottom-tab';
import DebitCard from '../dashboard/debit-card';
import ConfirmAmount from '../dashboard/confirm-amount';

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
      <Stack.Screen
        name="DebitCard"
        component={DebitCard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ConfirmAmount"
        component={ConfirmAmount}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNav;
