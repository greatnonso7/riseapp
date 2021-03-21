import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store from './redux/store';
import AppNavigation from './navigations';
import 'react-native-gesture-handler';
import Login from './home/login';
import Dashboard from './dashboard/home';
import Plan from './dashboard/plans';
import AllPlans from './dashboard/plans/all-plans';
import RealEstate from './dashboard/real-estate';

if (!__DEV__) {
  console.log = () => null;
}

const App = () => {
  return <RealEstate />;
};

export default App;
