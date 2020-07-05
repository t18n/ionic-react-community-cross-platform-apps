import './ProfileContact.scss';

import { IonButton, IonCol, IonIcon, IonItem, IonLabel, IonRow, IonText } from '@ionic/react';
import { call, create, logoLinkedin, mail } from 'ionicons/icons';
import React from 'react';

type Props = {
  isThat?: boolean;
};

const ProfileContact: React.FC<Props> = () => {
  return (
    <div className="profile-contact">
      <div className="panel">
        <div className="panel-header">
          <IonRow>
            <IonCol>Contact</IonCol>
            <IonCol size="auto">
              <IonButton fill="clear" color="primary" size="small" className="button-edit">
                <IonIcon slot="icon-only" icon={create} mode="md" />
              </IonButton>
            </IonCol>
          </IonRow>
        </div>

        <div className="panel-body">
          <IonItem>
            <IonIcon icon={logoLinkedin} slot="start" color="medium" />
            <IonLabel>
              <div className="text-sm">
                <strong>Your Profile</strong>
              </div>
              <IonText color="medium">
                <div className="text-sm">linkedin.com/in/hieupv</div>
              </IonText>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={call} mode="ios" slot="start" color="medium" />
            <IonLabel>
              <div className="text-sm">
                <strong>Phone</strong>
              </div>
              <IonText color="medium">
                <div className="text-sm">+65 1234 5678 (Work)</div>
              </IonText>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={mail} mode="md" slot="start" color="medium" />
            <IonLabel>
              <div className="text-sm">
                <strong>Email</strong>
              </div>
              <IonText color="medium">
                <div className="text-sm">mr_hie@yahoo.com</div>
              </IonText>
            </IonLabel>
          </IonItem>

          <IonButton expand="block" fill="clear" color="primary" size="small">
            See all
          </IonButton>
        </div>
      </div>
    </div>
  );
};

ProfileContact.defaultProps = {
  isThat: true,
};

export default ProfileContact;
