import './index.min.css';

import { AlertOptions } from '@ionic/core';
import { IonAlert } from '@ionic/react';
import { ReactControllerProps } from '@ionic/react/dist/types/components/createControllerComponent';
import React, { RefAttributes } from 'react';

type AlertProps = AlertOptions & ReactControllerProps & RefAttributes<HTMLIonAlertElement>;

export const Alert = (props: AlertProps) => {
  return <IonAlert {...props} />;
};
