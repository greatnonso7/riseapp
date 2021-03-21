import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardBottomTab from './dashboard-bottom-tab';
const HomeStack = createStackNavigator();

const Home = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home" headerMode="none">
      <HomeStack.Screen name="Home" component={DashboardBottomTab} />
    </HomeStack.Navigator>
  );
};

export default Home;
