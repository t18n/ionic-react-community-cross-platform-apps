import './index.min.css';

import { IonAvatar, IonButton, IonIcon, IonText } from '@ionic/react';
import faker from 'faker';
import React from 'react';

import { icLink } from '../Icons';

export interface ConnectItemProps {
  avatar: string;
  connectionCount: number;
  badge: string;
  firstName: string;
}

export const connections: ConnectItemProps[] = [...Array(15)].map(() => ({
  avatar: faker.image.avatar(),
  connectionCount: faker.random.number(),
  badge: faker.name.jobTitle(),
  firstName: faker.name.firstName(),
}));

const ConnectItem = ({ connectionCount, avatar, firstName, badge }: ConnectItemProps) => {
  console.log(connections);
  return (
    <div className="connect-item">
      <div
        className="item-background"
        style={{ backgroundImage: `url(${faker.image.nature()})` }}
      />
      <div className="item-body">
        <IonAvatar className="item-avatar thumbnail-xlarge">
          <img src={avatar} alt="" />
        </IonAvatar>
        <div className="item-title">
          <strong>{firstName}</strong>
        </div>
        <IonText color="medium">
          <div className="text-sm">{badge}</div>
        </IonText>
        <IonText color="medium">
          <div className="text-xs">
            <IonIcon icon={icLink} color="medium" size="medium" />
            {connectionCount} connections
          </div>
        </IonText>

        <IonButton expand="block" fill="outline" color="primary" size="small">
          Connect
        </IonButton>
      </div>
    </div>
  );
};

export default ConnectItem;
