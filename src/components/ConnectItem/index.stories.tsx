import { IonCol, IonRow } from '@ionic/react';
import faker from 'faker';
import React from 'react';

import ConnectItem, { connections } from './';

export default {
  title: 'Connect Item',
  component: ConnectItem,
};

export const Default = () => (
  <IonRow>
    {connections.map((connection, i) => (
      <ConnectItem
        key={i}
        connectionCount={connection.connectionCount}
        firstName={connection.firstName}
        badge={connection.badge}
        avatar={connection.avatar}
      />
    ))}
  </IonRow>
);
