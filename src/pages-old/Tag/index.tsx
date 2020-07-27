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
import { Trans } from '@lingui/macro';
import { Layout } from 'components-old/Layout';
import { MediumItem } from 'components-old/MediumItem';
import { PreviewHeaderTag } from 'components-old/PreviewHeaderTag';
import React, { useState } from 'react';

export const Tag = () => {
  const [data, setData] = useState({ isLoading: true, tag: null });

  useIonViewDidEnter(() => {
    setData({ isLoading: false, tag: { name: 'Hapiness' } });
  });

  return (
    <Layout id="tag-page" title={<Trans id="page.title.tag" />}>
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
