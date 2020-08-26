import './index.min.css';

import { IonCol, IonIcon, IonRow, IonText } from '@ionic/react';
import { starOutline } from 'ionicons/icons';
import React from 'react';

const ProfileDashboard = () => {
  return (
    <div className="profile-dashboard">
      <div className="panel">
        <div className="panel-header">
          <IonRow>
            <IonCol>Your Dashboard</IonCol>
            <IonCol size="auto">
              <IonText color="medium">
                <div className="text-sm">
                  <IonIcon icon={starOutline} mode="ios" />
                  <strong>ALL-STAR</strong>
                </div>
              </IonText>
            </IonCol>
          </IonRow>
        </div>
        <div className="panel-body">
          <div className="grid-divided">
            <IonRow className="ion-text-center ion-align-items-start table-bordered">
              <IonCol>
                <div className="text-xl">
                  <IonText color="primary">1236</IonText>
                </div>
                <IonText color="medium">
                  <div className="text-xs">Who viewed your profile</div>
                </IonText>
              </IonCol>
              <IonCol>
                <div className="text-xl">
                  <IonText color="primary">770</IonText>
                </div>
                <IonText color="medium">
                  <div className="text-xs">Post views</div>
                </IonText>
              </IonCol>
              <IonCol>
                <div className="text-xl">
                  <IonText color="primary">125</IonText>
                </div>
                <IonText color="medium">
                  <div className="text-xs">Search appearances</div>
                </IonText>
              </IonCol>
            </IonRow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
