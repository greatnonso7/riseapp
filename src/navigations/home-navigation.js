import Login from '../home/login';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthNav = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login" headerMode="none">
      <AuthStack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNav;
