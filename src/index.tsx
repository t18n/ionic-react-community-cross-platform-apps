import { setupConfig } from '@ionic/react';
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import * as serviceWorker from './serviceWorker';

// Override the initial Ionic config for the app
// https://ionicframework.com/docs/react/config
setupConfig({
  rippleEffect: false,
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
