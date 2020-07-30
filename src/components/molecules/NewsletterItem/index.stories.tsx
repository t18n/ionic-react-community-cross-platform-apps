import { IonCol } from '@ionic/react';
import React from 'react';

import NewsletterItem, { newsletters } from './';

export default {
  title: 'Molecules',
  component: NewsletterItem,
};

export const NewsletterItemExample = () =>
  newsletters.map((newsletter, i) => (
    <IonCol size="6" key={i}>
      <NewsletterItem
        cover={newsletter.cover}
        content={newsletter.content}
        badge={newsletter.badge}
        avatar={newsletter.avatar}
      />
    </IonCol>
  ));
