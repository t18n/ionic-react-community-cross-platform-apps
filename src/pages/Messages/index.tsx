import './index.min.css';

import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonIcon,
  IonInput,
  IonPage,
  IonToolbar,
} from '@ionic/react';
import { t } from '@lingui/macro';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import faker from 'faker';
import { addCircle } from 'ionicons/icons';
import React from 'react';

export const Messages = () => {
  return (
    <IonPage className="chat-page">
      <Breadcrumb title={t`page.title.media`} />

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
