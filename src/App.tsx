import './styles/main.min.css';

import { IonApp } from '@ionic/react';
import React from 'react';

import { Sidebar } from './components/Sidebar';
import { ApolloProvider } from './graphql/ApolloProvider';

export const App = () => {
  return (
    <ApolloProvider>
      <IonApp>
        <Sidebar />
      </IonApp>
    </ApolloProvider>
  );
};
