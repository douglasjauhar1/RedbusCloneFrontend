import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import Main from './Src/Routes/Main';
import persist from "./Src/Redux/Store/Store";

const persistStore = persist();

export default class Application extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={persistStore.store}>
        <PersistGate loading={null} persistor={persistStore.persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}
