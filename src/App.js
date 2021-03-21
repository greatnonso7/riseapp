import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store from './redux/store';
import AppNavigation from './navigations';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

if (!__DEV__) {
  console.log = () => null;
}

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
