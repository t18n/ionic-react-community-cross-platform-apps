import './index.min.css';

import { IonAvatar, IonButton, IonCol, IonIcon, IonRow, IonText } from '@ionic/react';
import faker from 'faker';
import React from 'react';

import { icCheck, icLink, icX } from '../../atoms/Icons';

export interface InvitationItemProps {
  avatar: string;
  connectionCount: number;
  badge: string;
  firstName: string;
}

export const invitations: InvitationItemProps[] = [...Array(5)].map(() => ({
  connectionCount: faker.random.number(),
  firstName: faker.name.firstName(),
  badge: faker.name.jobTitle(),
  avatar: faker.image.avatar(),
}));

const InvitationItem = ({ badge, connectionCount, avatar, firstName }: InvitationItemProps) => {
  return (
    <div className="invitation-item unread">
      <IonRow>
        <IonCol size="auto">
          <IonAvatar className="thumbnail-large">
            <img src={avatar} alt={`${firstName} avatar`} />
          </IonAvatar>
        </IonCol>
        <IonCol>
          <div>
            <strong>{firstName}</strong>
          </div>
          <IonText color="medium">
            <div className="text-sm">{badge}</div>
          </IonText>
          <IonText color="medium">
            <IonIcon icon={icLink} color="medium" size="medium" />
            <span className="text-xs">{connectionCount} connections</span>
          </IonText>
        </IonCol>
        <IonCol size="auto">
          <IonButton className="button-action" fill="clear">
            <IonIcon slot="icon-only" icon={icX} color="medium" size="small" />
          </IonButton>
          <IonButton className="button-action" fill="clear">
            <IonIcon slot="icon-only" icon={icCheck} color="primary" size="small" />
          </IonButton>
        </IonCol>
      </IonRow>
    </div>
  );
};

export default InvitationItem;
