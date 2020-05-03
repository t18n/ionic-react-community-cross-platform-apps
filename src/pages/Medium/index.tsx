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
import React from 'react';

import { MediumItem } from '../../components/MediumItem';
import { PreviewHeader } from '../../components/PreviewHeader';
import { useMediumsQuery } from '../../graphql/operation/medium/query';

export const Medium = ({
  match: {
    params: { slug },
  },
}) => {
  const { data, loading } = useMediumsQuery();
  const medium = data && data.mediums.find((medium) => medium.slug === slug);

  useIonViewDidEnter(() => {
    console.log(slug);
  });

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/explore" />
          </IonButtons>
          <IonTitle>{slug}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        {loading ? (
          <div className="ion-text-center ion-padding">
            <IonSpinner color="primary" />
          </div>
        ) : (
          <PreviewHeader medium={medium} />
        )}
        <IonList>
          {loading ? (
            <div className="ion-text-center ion-padding">
              <IonSpinner color="primary" />
            </div>
          ) : (
            data &&
            data.mediums.map(({ id, slug, title, cover, users, comments, reactions }) => (
              <MediumItem
                key={id}
                cover={cover}
                title={title}
                author={users[0]?.name}
                comments={comments?.length}
                reactions={reactions?.length}
                onClick={() => console.log('tag clicked', slug)}
              />
            ))
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
