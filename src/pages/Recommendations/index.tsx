import './index.min.css';

import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import ProfileCard from 'components/ProfileCard';
import { profiles } from 'components/ProfileCard';
import React from 'react';

const Recommendations = () => {
  return (
    <IonPage className="recommendations-page">
      <IonHeader>
        <IonToolbar className="no-border" color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/network" />
          </IonButtons>

          <IonTitle>Recommendations</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonItem lines="none">
          <IonLabel>All recommendations (99)</IonLabel>
        </IonItem>

        <div className="panel">
          <div className="panel-body has-grid">
            <IonRow>
              {profiles.map((profile, i) => (
                <IonCol size="6" key={i}>
                  <ProfileCard
                    avatar={profile.avatar}
                    followerCount={profile.followerCount}
                    cover={profile.cover}
                    name={profile.name}
                  />
                </IonCol>
              ))}
            </IonRow>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Recommendations;
