import './index.min.css';

import { IonAvatar, IonCol, IonRow, IonText } from '@ionic/react';
import faker from 'faker';
import React from 'react';

export interface MessageItemProps {
  isUnread: boolean;
  onClickDetail?: () => void;
  avatar: string;
  firstName: string;
  timestamp: string;
  content: string;
}

export const messages: MessageItemProps[] = [...Array(20)].map(() => ({
  firstName: faker.name.firstName(),
  avatar: faker.image.avatar(),
  isUnread: true,
  onClickDetail: () => console.log('clinked'),
  timestamp: `${faker.date.past().getUTCDay()}d`,
  content: faker.lorem.sentences(),
}));

const MessageItem = ({
  isUnread,
  onClickDetail,
  avatar,
  firstName,
  timestamp,
  content,
}: MessageItemProps) => {
  return (
    <div className="message-item" onClick={onClickDetail}>
      <IonRow>
        <IonCol size="auto">
          <IonAvatar className="avatar thumbnail-large">
            <img src={avatar} alt="" />
            <div className="avatar-status">
              <div className="online-status active"></div>
            </div>
          </IonAvatar>
        </IonCol>
        <IonCol>
          <IonRow>
            <IonCol className="ion-no-padding">
              {isUnread && (
                <div>
                  <strong>{firstName}</strong>
                </div>
              )}

              {!isUnread && <div>{firstName}</div>}
            </IonCol>
            <IonCol className="ion-no-padding" size="auto">
              <IonText color="medium">
                <div className="text-xs">{timestamp}</div>
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className="ion-no-padding">
              <IonText color={isUnread ? 'dark' : 'medium'}>
                <div className="text-sm">{content}</div>
              </IonText>
            </IonCol>
          </IonRow>
        </IonCol>
      </IonRow>
    </div>
  );
};

export default MessageItem;
