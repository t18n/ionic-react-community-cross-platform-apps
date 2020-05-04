import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonSpinner,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
} from '@ionic/react';
import React, { useState } from 'react';

import { Layout } from '../../components/Layout';
import { MediumItem } from '../../components/MediumItem';
import { PreviewHeaderTag } from '../../components/PreviewHeaderTag';

export const Tag = () => {
  const [data, setData] = useState({ isLoading: true, tag: null });

  useIonViewDidEnter(() => {
    setData({ isLoading: false, tag: { name: 'Hapiness' } });
  });

  return (
    <Layout id="tag-page">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/explore" />
          </IonButtons>
          <IonTitle>{data.tag ? data.tag.name : ''}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <PreviewHeaderTag />
        <IonList>
          {data.isLoading ? (
            <div className="ion-text-center ion-padding">
              <IonSpinner color="primary" />
            </div>
          ) : (
            data.tag.items.map(({ id, slug, title, cover, author, comments, reactions }) => (
              <MediumItem
                key={id}
                title={title}
                cover={cover}
                author={author}
                comments={comments}
                reactions={reactions}
                onClick={() => console.log('tag clicked', slug)}
              />
            ))
          )}
        </IonList>
      </IonContent>
    </Layout>
  );
};
