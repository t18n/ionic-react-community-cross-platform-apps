import { IonRow } from '@ionic/react';
import React from 'react';

import ConnectItem, { connections } from './';

export default {
  title: 'Molecules',
  component: ConnectItem,
};

export const ConnectItemExample = () => (
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
