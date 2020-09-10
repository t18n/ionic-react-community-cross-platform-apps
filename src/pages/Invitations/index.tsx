import './index.min.css';

import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import InvitationItem, { invitations } from 'components/molecules/InvitationItem';
import React from 'react';

const Invitations = () => {
  return (
    <IonPage className="invitations-page">
      <IonHeader>
        <IonToolbar className="border-0" color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/network" />
          </IonButtons>

          <IonTitle>Invitations</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonItem>
          <IonLabel>All invitations (99)</IonLabel>
        </IonItem>

        {invitations.map((invitation, i) => (
          <InvitationItem
            key={i}
            connectionCount={invitation.connectionCount}
            firstName={invitation.firstName}
            badge={invitation.badge}
            avatar={invitation.avatar}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Invitations;
