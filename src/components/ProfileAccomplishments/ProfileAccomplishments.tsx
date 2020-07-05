import './ProfileAccomplishments.scss';

import { IonButton, IonCol, IonIcon, IonRow, IonText } from '@ionic/react';
import { create } from 'ionicons/icons';
import React from 'react';

const ProfileAccomplishments = () => {
  return (
    <div className="profile-accomplishments">
      <div className="panel">
        <div className="panel-header">Accomplishments</div>

        <div className="panel-body">
          <div className="accomplishment-item">
            <IonRow>
              <IonCol size="auto">
                <div className="accomplishment-count">9</div>
              </IonCol>
              <IonCol>
                <IonText color="primary">
                  <div className="text-sm">
                    <strong>PROJECTS</strong>
                  </div>
                </IonText>
                <div className="text-sm">Avengers Lab</div>
              </IonCol>
              <IonCol size="auto">
                <IonButton fill="clear" color="primary" size="small" className="button-no-padding">
                  <IonIcon slot="icon-only" icon={create} mode="md" />
                </IonButton>
              </IonCol>
            </IonRow>
          </div>
          <div className="accomplishment-item">
            <IonRow>
              <IonCol size="auto">
                <div className="accomplishment-count">2</div>
              </IonCol>
              <IonCol>
                <IonText color="primary">
                  <div className="text-sm">
                    <strong>LANGUAGES</strong>
                  </div>
                </IonText>
                <div className="text-sm">English, French</div>
              </IonCol>
              <IonCol size="auto">
                <IonButton fill="clear" color="primary" size="small" className="button-no-padding">
                  <IonIcon slot="icon-only" icon={create} mode="md" />
                </IonButton>
              </IonCol>
            </IonRow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAccomplishments;
