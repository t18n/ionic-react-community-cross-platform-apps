import './styles/main.min.css';

import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Route } from 'react-router-dom';

import I18nProvider from './components-old/I18n';
import Modals from './components/Modals';
import SideMenu from './components/SideMenu/SideMenu';
import Provider from './context/Provider';
import { ApolloProvider } from './graphql/ApolloProvider';
import Chat from './pages/Chat/Chat';
import Landing from './pages/Landing/Landing';
import Messaging from './pages/Messaging';
import Tabs from './pages/Tabs';

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
