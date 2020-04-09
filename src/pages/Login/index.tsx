import './styles/index.min.css';

import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';

import mcl from './styles/index.pcss.json';

export const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!username) {
      setUsernameError(true);
    }
    if (!password) {
      setPasswordError(true);
    }

    if (username && password) {
      history.push('/explore', { direction: 'none' });
    }
  };

  return (
    <IonPage id="login-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className={mcl.container}>
          <form noValidate onSubmit={login} className={mcl.loginForm}>
            <IonList>
              <IonItem>
                <IonLabel position="stacked" color="primary">
                  Username
                </IonLabel>
                <IonInput
                  name="username"
                  type="text"
                  value={username}
                  spellCheck={false}
                  autocapitalize="off"
                  onIonChange={(e) => setUsername(e.detail.value!)}
                  required
                ></IonInput>
              </IonItem>

              {formSubmitted && usernameError && (
                <IonText color="danger">
                  <p>Username is required</p>
                </IonText>
              )}

              <IonItem>
                <IonLabel position="stacked" color="primary">
                  Password
                </IonLabel>
                <IonInput
                  name="password"
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                ></IonInput>
              </IonItem>

              {formSubmitted && passwordError && (
                <IonText color="danger">
                  <p className="ion-padding-start">Password is required</p>
                </IonText>
              )}
            </IonList>

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
        </div>
      </IonContent>
    </IonPage>
  );
};
