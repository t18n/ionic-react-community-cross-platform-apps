import './Login.scss';

import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonRow,
  IonToolbar,
} from '@ionic/react';
import { close } from 'ionicons/icons';
import React from 'react';

type Props = {
  onClose: () => void;
  onLogin: () => void;
};

const Login: React.FC<Props> = (props) => {
  const closeModal = () => {
    props.onClose();
  };

  const login = () => {
    props.onLogin();
  };

  return (
    <>
      <IonHeader>
        <IonToolbar className="no-border" color="primary">
          <IonButtons slot="end">
            <IonButton onClick={closeModal}>
              <IonIcon slot="icon-only" icon={close} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="bg-primary">
        <div className="landing-login">
          <IonList inset>
            <IonItem lines="full">
              <IonInput type="text" placeholder="Email"></IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonInput type="password" placeholder="Password"></IonInput>
            </IonItem>
          </IonList>

          <div className="ion-padding">
            <IonButton
              className="ion-margin-left ion-margin-right"
              onClick={login}
              expand="block"
              color="white"
              fill="outline"
            >
              Sign in
            </IonButton>
          </div>

          <IonRow>
            <IonCol>
              <IonButton fill="clear" color="white" size="small">
                Forgot password?
              </IonButton>
            </IonCol>
            <IonCol className="ion-text-right">
              <IonButton fill="clear" color="white" size="small">
                Join now
              </IonButton>
            </IonCol>
          </IonRow>
        </div>
      </IonContent>
    </>
  );
};

export default Login;
