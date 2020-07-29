import './styles/main.min.css';
import './utils/debugger';

import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Modals from 'components/organisms/Modals';
import SideMenu from 'components/organisms/SideMenu';
import Provider from 'context/Provider';
import Chat from 'pages/Chat';
import Landing from 'pages/Landing';
import Messaging from 'pages/Messaging';
import Tabs from 'pages/Tabs';
import React from 'react';
import { Route } from 'react-router-dom';

import I18nProvider from './components-old/I18n';
import { ApolloProvider } from './graphql/ApolloProvider';

export const App = () => {
  return (
    <ApolloProvider>
      <I18nProvider>
        <Provider>
          <IonApp>
            <Modals />
            <IonReactRouter>
              <IonSplitPane contentId="main">
                <SideMenu />
                <IonRouterOutlet id="main">
                  <Route path="/" component={Tabs} />
                  <Route path="/messaging" component={Messaging} exact />
                  <Route path="/chat/:id" component={Chat} exact />
                  <Route path="/login" component={Landing} exact />
                </IonRouterOutlet>
              </IonSplitPane>
            </IonReactRouter>
          </IonApp>
        </Provider>
      </I18nProvider>
    </ApolloProvider>
  );
};
