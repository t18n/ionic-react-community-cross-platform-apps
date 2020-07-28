import { JSX } from '@ionic/core';
import { IonRefresher } from '@ionic/react';
import React, { HTMLAttributes, ReactNode } from 'react';

/**
 * Types
 */
type RefresherProps = JSX.IonRefresher &
  HTMLAttributes<HTMLIonRefresherElement> & {
    children: ReactNode;
  };

/**
 * Components
 */
export const Refresher = (props: RefresherProps) => {
  return <IonRefresher {...props} />;
};
