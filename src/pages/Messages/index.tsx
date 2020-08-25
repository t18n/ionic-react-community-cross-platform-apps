import './index.min.css';

import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import faker from 'faker';
import { addCircle, expand } from 'ionicons/icons';
import React from 'react';

export const Messages = () => {
  return (
    <IonPage className="chat-page">
      <IonHeader>
        <IonToolbar className="border-0" color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/messaging" />
          </IonButtons>

          <IonTitle className="title-custom">
            <div className="text-sm">
              <strong>{faker.name.firstName()}</strong>
            </div>
            <div className="text-xxs">
              <div className="online-status active"></div>
              <span className="status">Mobile</span>·<span className="status">22h ago</span>
            </div>
          </IonTitle>

          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="icon-only" icon={expand} mode="ios" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="chat-header">
          <IonAvatar className="avatar-sender-lg">
            <img src={faker.image.avatar()} alt="" />
            <div className="avatar-status">
              <div className="online-status active"></div>
            </div>
          </IonAvatar>
          <div>
            <strong>{faker.name.firstName()}</strong>
          </div>
          <div className="text-sm">Recruitment Manager at Avengers</div>
        </div>

        <div className="conversation">
          <div className="conversation-divider">
            <div className="line-horizontal"></div>
            <div className="label-time">AUG 14</div>
          </div>

          {/* <MessagesItem /> */}

          <div className="conversation-divider">
            <div className="line-horizontal"></div>
            <div className="label-time">AUG 15</div>
          </div>

          {/* <MessagesItem /> */}

          <div className="conversation-divider">
            <div className="line-horizontal"></div>
            <div className="label-time">AUG 16</div>
          </div>

          {/* <MessagesItem /> */}
        </div>
      </IonContent>

      <IonFooter>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <IonButton fill="clear">
              <IonIcon slot="icon-only" icon={addCircle} />
            </IonButton>
          </IonButtons>

          <IonInput type="text" placeholder="Write a message..."></IonInput>

          <IonButtons slot="end">
            <IonButton fill="clear">
              <strong>Send</strong>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
