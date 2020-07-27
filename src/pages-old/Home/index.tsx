import { IonButton, IonContent } from '@ionic/react';
import { Trans } from '@lingui/macro';
import { Layout } from 'components-old/Layout/index';
import React from 'react';

export const Home = ({ history }) => {
  return (
    <Layout id="home-page" title={<Trans id="page.title.home" />}>
      <IonContent className="ion-padding ion-text-center" fullscreen={true}>
        <h1>Welcome to Brightizen community</h1>
        <IonButton
          onClick={(e) => {
            e.preventDefault();
            history.push('/explore');
          }}
        >
          Explore
        </IonButton>
      </IonContent>
    </Layout>
  );
};
