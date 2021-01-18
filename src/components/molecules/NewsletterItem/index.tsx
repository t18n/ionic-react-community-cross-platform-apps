import './index.min.css';

import { IonButton, IonCol, IonRow, IonText, IonThumbnail } from '@ionic/react';
import faker from 'faker';
import React from 'react';

export interface NewsletterItemProps {
  avatar: string;
  cover: string;
  content: string;
  badge: string;
}

export const newsletters: NewsletterItemProps[] = [...Array(8)].map(() => ({
  cover: faker.image.nature(),
  content: faker.lorem.sentences(),
  badge: faker.name.jobTitle(),
  avatar: faker.image.avatar(),
}));

const NewsletterItem = ({ cover, avatar, content, badge }: NewsletterItemProps) => {
  return (
    <div className="newsletter-item">
      <div className="item-figure" style={{ backgroundImage: `url(${cover})` }} />
      <div className="item-body">
        <div className="item-title">
          <strong>{content}</strong>
        </div>

        <IonRow>
          <IonCol size="auto">
            <IonThumbnail className="item-author-thumbnail tiny">
              <img src={avatar} alt="" />
            </IonThumbnail>
          </IonCol>
          <IonCol>
            <IonText color="medium">
              <div className="text-xs">{badge}</div>
            </IonText>
          </IonCol>
        </IonRow>

        <IonButton expand="block" fill="outline" color="primary" size="small">
          Subscribe
        </IonButton>
      </div>
    </div>
  );
};

export default NewsletterItem;
