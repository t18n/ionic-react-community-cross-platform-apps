import { Plugins } from '@capacitor/core';
import { setupConfig } from '@ionic/react';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

const { SplashScreen } = Plugins;

const rootEl = document.getElementById('root');

// Override the initial Ionic config for the app
// https://ionicframework.com/docs/react/config
setupConfig({
  rippleEffect: false,
  mode: 'ios', // force the theme to iOS mode for all elements which has no mode specified
  backButtonText: '',
  // animated: !isPlatform('mobileweb'), // disable animations if app run in browser of slower device
});

ReactDOM.render(<App />, rootEl);

if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const DevApp = require('./App').default;
    ReactDOM.render(<DevApp />, rootEl);
  });
}

// https://capacitor.ionicframework.com/docs/apis/splash-screen/#hiding-the-splash-screen
SplashScreen.hide();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
