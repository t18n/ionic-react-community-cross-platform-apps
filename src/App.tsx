import './styles/main.min.css';

import { IonApp } from '@ionic/react';
import React from 'react';

import I18nProvider from './components/I18n';
import { Sidebar } from './components/Sidebar';
import { ApolloProvider } from './graphql/ApolloProvider';

export const App = () => {
  return (
    <ApolloProvider>
      <I18nProvider>
        <IonApp>
          <Sidebar />
        </IonApp>
      </I18nProvider>
    </ApolloProvider>
  );
};
