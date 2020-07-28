import './index.min.css';

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import MessageItem, { messages } from 'components/molecules/MessageItem';
import { create, personAdd } from 'ionicons/icons';
import React from 'react';

type Props = {
  history: any;
};

const Messaging = ({ history }: Props) => {
  const goToChat = (id: number) => {
    history.push(`/chat/${id}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="no-border" color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>

          <IonTitle>Messaging</IonTitle>

          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="icon-only" icon={personAdd} mode="md" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonToolbar className="toolbar-search content-search" color="light">
          <IonSearchbar placeholder="Search Messages"></IonSearchbar>
        </IonToolbar>

        {messages.map((message, i) => (
          <MessageItem
            key={i}
            firstName={message.firstName}
            avatar={message.avatar}
            isUnread={message.isUnread}
            onClickDetail={message.onClickDetail}
            timestamp={message.timestamp}
            content={message.content}
          />
        ))}

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={create} mode="ios" />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Messaging;
