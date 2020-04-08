import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import AppNavigator from './src/navigators/AppNavigator'
import { Provider } from 'mobx-react'
import RootStore from './src/stores'

declare var global: {HermesInternal: null | {}};

const root = new RootStore();

const App = () => {
  return (
    <>
      <Provider {...root}>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </Provider>
    </>
  );
};

export default App;
