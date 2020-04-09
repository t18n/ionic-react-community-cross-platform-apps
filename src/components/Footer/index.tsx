import '@ionic/react/css/ionic.bundle.css';
import './styles/index.min.css';

import { IonFooter } from '@ionic/react';
import React from 'react';

import mcl from './styles/index.pcss.json';

export const Footer = () => (
  <IonFooter translucent={true} className={mcl.brFooter}>
    Brightizen
  </IonFooter>
);
