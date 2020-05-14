import { IonButton, IonContent } from '@ionic/react';
import React from 'react';

import { Layout } from '../../components/Layout/index';

export const Home = ({ history }) => {
  return (
    <Layout id="home-page">
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
