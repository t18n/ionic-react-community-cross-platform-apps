import { JSX } from '@ionic/core';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

export const Col = (props: JSX.IonCol & HTMLAttributes<HTMLIonColElement>) => {
  return <IonCol {...props} />;
};

export const Grid = (props: JSX.IonGrid & HTMLAttributes<HTMLIonGridElement>) => {
  return <IonGrid {...props} />;
};

export const Row = (props: JSX.IonRow & HTMLAttributes<HTMLIonRowElement>) => {
  return <IonRow {...props} />;
};
