import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonSpinner,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
} from '@ionic/react';
import React, { useState } from 'react';

import { MediumItem } from '../../components/MediumItem';
import { PreviewHeader } from '../../components/PreviewHeader';

export const Tag = () => {
  const [data, setData] = useState({ isLoading: true, tag: null });

  useIonViewDidEnter(() => {
    setData({ isLoading: false, tag: { name: 'Hapiness' } });
  });

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/explore" />
          </IonButtons>
          <IonTitle>{data.tag ? data.tag.name : ''}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <PreviewHeader />
        <IonList>
          {data.isLoading ? (
            <div className="ion-text-center ion-padding">
              <IonSpinner color="primary" />
            </div>
          ) : (
            data.tag.items.map(({ id, slug, title, author, comments, reactions }) => (
              <MediumItem
                key={id}
                title={title}
                author={author}
                comments={comments}
                reactions={reactions}
                onClick={() => console.log('tag clicked', slug)}
              />
            ))
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
