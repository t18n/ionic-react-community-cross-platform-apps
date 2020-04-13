import './styles/index.min.css';

import { useMutation } from '@apollo/client';
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
import gql from 'graphql-tag';
import React, { useState } from 'react';

import mcl from './styles/index.pcss.json';
import { LoginMutation, LoginMutation_login, LoginMutationVariables } from './types/LoginMutation';

const LOGIN = gql`
  mutation LoginMutation($data: LoginInput!) {
    login(data: $data) {
      firstName
      email
    }
  }
`;

export const Login = ({ history }) => {
  const [user, setUser] = useState<LoginMutation_login>(null);
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitError, setFormSubmitError] = useState(null);

  const [login, { loading }] = useMutation<LoginMutation, LoginMutationVariables>(LOGIN);

  const onLoginUser = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputPassword || !inputEmail) {
      setFormSubmitError('Please fill all required data');
    }

    setFormSubmitted(true);

    // Login user
    try {
      const result = await login({
        variables: {
          data: { email: inputEmail, password: inputPassword },
        },
      });

      setUser(result.data.login);
      setFormSubmitError(null);

      // history.push('/explore', { direction: 'none' });
    } catch (e) {
      setFormSubmitError(`Login unsuccessfully! ${e}`);
      return;
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
          <form noValidate onSubmit={onLoginUser} className={mcl.loginForm}>
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

            {formSubmitted && formSubmitError && (
              <IonText color="danger">
                <p>{formSubmitError}</p>
              </IonText>
            )}

            {loading && (
              <IonText color="info">
                <p>Logging in...</p>
              </IonText>
            )}

            {user && (
              <IonText color="success">
                <p>User: {user.firstName}</p>
              </IonText>
            )}

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
