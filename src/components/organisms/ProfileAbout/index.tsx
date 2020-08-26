import './index.min.css';

import { IonButton, IonCol, IonIcon, IonRow } from '@ionic/react';
import { create } from 'ionicons/icons';
import React from 'react';

const ProfileAbout = () => {
  return (
    <div className="profile-about">
      <div className="panel">
        <div className="panel-header">
          <IonRow>
            <IonCol>About</IonCol>
            <IonCol size="auto">
              <IonButton fill="clear" color="primary" size="small" className="button-edit">
                <IonIcon slot="icon-only" icon={create} mode="ios" />
              </IonButton>
            </IonCol>
          </IonRow>
        </div>
        <div className="panel-body">
          <div className="text-sm">
            Whatever I learn or do, that&apos;s all about improving human experience...
          </div>
          <IonRow className="ion-justify-content-end">
            <IonButton size="small" fill="clear" color="medium">
              ...see more
            </IonButton>
          </IonRow>
        </div>
      </div>
    </div>
  );
};

export default ProfileAbout;
