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
import { t } from '@lingui/macro';
import React from 'react';

import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
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
    <Layout id="medium-page">
      <Header title={t`Medium`} />
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
    </Layout>
  );
};
