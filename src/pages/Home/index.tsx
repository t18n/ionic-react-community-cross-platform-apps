import { IonButton, IonContent } from '@ionic/react';
import { Trans } from '@lingui/macro';
import React from 'react';

import { Layout } from '../../components/Layout/index';

export const Home = ({ history }) => {
  return (
    <Layout id="home-page" title={<Trans id="page.title.home" />}>
      <IonContent className="ion-padding ion-text-center" fullscreen={true}>
        <h1>Welcome to CrossPlatformIonic community</h1>
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
