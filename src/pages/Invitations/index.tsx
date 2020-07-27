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
import InvitationItem from 'components/InvitationItem';
import { invitations } from 'components/InvitationItem';
import React from 'react';

const Invitations = () => {
  return (
    <IonPage className="invitations-page">
      <IonHeader>
        <IonToolbar className="no-border" color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/network" />
          </IonButtons>

          <IonTitle>Invitations</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonItem lines="none">
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
