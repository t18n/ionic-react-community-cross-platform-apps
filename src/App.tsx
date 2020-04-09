import './styles/main.min.css';

import { IonApp } from '@ionic/react';
import React from 'react';

import { Sidebar } from './components/Sidebar';

export const App = () => {
  return (
    <IonApp>
      <Sidebar />
    </IonApp>
  );
};
