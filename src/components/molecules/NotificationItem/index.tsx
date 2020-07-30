import './index.min.css';

import {
  IonAvatar,
  IonButton,
  IonCol,
  IonIcon,
  IonRow,
  IonText,
  IonThumbnail,
} from '@ionic/react';
import faker from 'faker';
import React from 'react';

import { icArrowsMaximize } from '../../atoms/Icon';

export type NotificationItemProps = {
  type?: 'activity';
  isUnread: boolean;
  avatar: string;
  timestamp: string;
  notificationText: string;
};

export const notifications: NotificationItemProps[] = [...Array(15)].map(() => ({
  type: 'activity',
  isUnread: faker.random.boolean(),
  avatar: faker.image.avatar(),
  timestamp: `${faker.date.past().getUTCDay()}d`,
  notificationText: faker.lorem.sentence(),
}));

const NotificationItem = ({
  isUnread,
  type,
  avatar,
  notificationText,
  timestamp,
}: NotificationItemProps) => {
  return (
    <div className={`notification-item ${isUnread && 'unread'}`}>
      <IonRow>
        <IonCol size="auto">
          {type === 'activity' && (
            <div>
              <IonThumbnail>
                <img src={avatar} alt="" />
              </IonThumbnail>
            </div>
          )}
          {type !== 'activity' && (
            <div>
              <IonAvatar>
                <img src={avatar} alt="" />
              </IonAvatar>
            </div>
          )}
        </IonCol>
        <IonCol>
          {type === 'activity' && (
            <div>
              <div className="text-sm m-b-sm">{notificationText}</div>
              <IonButton fill="outline" color="primary" size="small">
                View details
              </IonButton>
            </div>
          )}
        </IonCol>
        <IonCol size="auto" className="ion-text-center ion-align-items-start">
          <IonButton fill="clear" color="medium" size="small" className="button-no-padding">
            <IonIcon slot="icon-only" icon={icArrowsMaximize} />
          </IonButton>
          <IonText color="medium">
            <div className="text-xs">{timestamp}</div>
          </IonText>
        </IonCol>
      </IonRow>
    </div>
  );
};

export default NotificationItem;
