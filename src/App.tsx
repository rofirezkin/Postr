import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {GlobalContextProvider} from './services/globalContext';

const App = () => {
  return (
    <NavigationContainer>
      <GlobalContextProvider>
        <Router />
      </GlobalContextProvider>
    </NavigationContainer>
  );
};

export default App;
