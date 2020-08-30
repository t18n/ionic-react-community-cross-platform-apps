import './index.min.css';

import { IonAvatar, IonCol, IonRow, IonText } from '@ionic/react';
import faker from 'faker';
import React from 'react';

import { Link } from '../../atoms/Layout/Link/index';

export interface ChatItemProps {
  thumbnail: string;
  timestamp: string;
  content: string;
  firstName: string;
  profileSlug?: string;
}

export const chatItems: ChatItemProps[] = [...Array(30)].map(() => ({
  thumbnail: faker.image.avatar(),
  firstName: faker.name.firstName(),
  profileSlug: '/profile',
  timestamp: `${faker.date.past().getDay()}d`,
  content: faker.lorem.sentences(),
}));

const ChatItem = ({ thumbnail, timestamp, content, firstName, profileSlug }: ChatItemProps) => {
  return (
    <div className="chat-item">
      <IonRow>
        <IonCol size="auto">
          <IonAvatar className="small">
            <img src={thumbnail} alt="" />
          </IonAvatar>
        </IonCol>
        <IonCol>
          <div>
            <Link href={profileSlug}>
              <strong>{firstName}</strong>
            </Link>

            <IonText color="medium">
              <span className="text-xs"> · {timestamp}</span>
            </IonText>
          </div>
          <div className="chat-body">
            <p>{content}</p>
          </div>
        </IonCol>
      </IonRow>
    </div>
  );
};

export default ChatItem;
