import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {GlobalContextProvider} from './services/globalContext';
import {LogBox} from 'react-native';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <GlobalContextProvider>
        <Router />
        <FlashMessage position="top" />
      </GlobalContextProvider>
    </NavigationContainer>
  );
};

export default App;
