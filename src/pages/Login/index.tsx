import './index.min.css';

import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonLoading,
  IonRow,
  IonToast,
  IonToolbar,
} from '@ionic/react';
import { useLoginUser } from 'graphql/operation/user/mutation';
import { ME } from 'graphql/operation/user/shape';
import { useToast } from 'hooks/useToast';
import { close } from 'ionicons/icons';
import React, { useState } from 'react';

type Props = {
  onClose: () => void;
  onLogin: () => void;
  history: any;
};

export const Login = ({ history, onLogin, onClose }: Props) => {
  const [login, { loading: LOGIN_loading }] = useLoginUser();
  const [toast, setToast] = useToast(null);

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const onLoginUser = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputPassword || !inputEmail) {
      setToast({
        status: true,
        position: 'bottom',
        message: `Please fill all required data`,
        duration: 3000,
        color: 'danger',
      });
    }

    // Login user
    try {
      await login({
        variables: {
          data: { email: inputEmail, password: inputPassword },
        },
        update(cache, { data: { login } }) {
          // const { me } = cache.readQuery({ query: ME });
          cache.writeQuery({
            query: ME,
            data: { me: login },
          });
        },
      });

      history.push('/explore', { direction: 'none' });
    } catch (e) {
      setToast({
        status: true,
        position: 'bottom',
        message: `Login unsuccessfully! ${e}`,
        duration: 3000,
        color: 'danger',
      });
      return;
    }
  };

  const closeModal = () => {
    onClose();
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
        <form noValidate onSubmit={onLoginUser}>
          <IonList>
            <IonItem>
              <IonLabel position="stacked" color="primary">
                Email
              </IonLabel>
              <IonInput
                name="email"
                type="text"
                value={inputEmail}
                spellCheck={false}
                autocapitalize="off"
                onIonChange={(e) => setInputEmail(e.detail.value)}
                required
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked" color="primary">
                Password
              </IonLabel>
              <IonInput
                name="password"
                type="password"
                value={inputPassword}
                onIonChange={(e) => setInputPassword(e.detail.value)}
              ></IonInput>
            </IonItem>
          </IonList>

          <IonToast
            isOpen={toast?.status}
            position={toast?.position}
            message={toast?.message}
            duration={toast?.duration}
            color={toast?.color}
            onDidDismiss={() => setToast({ ...toast, status: false })}
          />

          {LOGIN_loading && <IonLoading isOpen={LOGIN_loading} message={'Logging in...'} />}

          <IonRow>
            <IonCol>
              <IonButton type="submit" expand="block">
                Login
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton routerLink="/signup" color="light" expand="block">
                Signup
              </IonButton>
            </IonCol>
          </IonRow>
        </form>
      </IonContent>
    </>
  );
};
