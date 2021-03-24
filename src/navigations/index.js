import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNav from './onboarding';
import DashboardBottomTab from './dashboard/dashboard-bottom-tab';
import DebitCard from '../dashboard/debit-card';
import ConfirmAmount from '../dashboard/confirm-amount';
import NairaCard from '../dashboard/naira-card';
import AllPlans from '../dashboard/plans/all-plans';
import PlanName from '../dashboard/plans/plan-name';
import PlanDuration from '../dashboard/plans/plan-duration';
import AddMoney from '../dashboard/plans/plan-add-money';
import AutoInvest from '../dashboard/plans/plan-auto-invest';
import PlanAmount from '../dashboard/plans/plan-amount';
import AddImage from '../dashboard/plans/add-image';

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
      <Stack.Screen
        name="NairaCard"
        component={NairaCard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AllPlans"
        component={AllPlans}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PlanName"
        component={PlanName}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PlanDuration"
        component={PlanDuration}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddMoney"
        component={AddMoney}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PlanAmount"
        component={PlanAmount}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AutoInvest"
        component={AutoInvest}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PickImage"
        component={AddImage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNav;
