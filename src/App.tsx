import './styles/main.min.css';
import './utils/debugger';

import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import I18nProvider from 'components/organisms/I18n';
import { NewPostModal } from 'components/organisms/NewPostModal';
import SideMenu from 'components/organisms/SideMenu';
import Provider from 'context/Provider';
import { ApolloProvider } from 'graphql/ApolloProvider';
import React from 'react';
import { Route } from 'react-router-dom';
import { appPages } from 'settings/appPages';

export const App = () => {
  return (
    <ApolloProvider>
      <I18nProvider>
        <Provider>
          <IonApp>
            <IonReactRouter>
              <IonSplitPane contentId="main">
                <NewPostModal />
                <SideMenu />
                <IonRouterOutlet id="main">
                  {Object.keys(appPages).map((id) => (
                    <Route
                      key={id}
                      path={appPages[id].url}
                      component={appPages[id].component}
                      exact
                    />
                  ))}
                </IonRouterOutlet>
              </IonSplitPane>
            </IonReactRouter>
          </IonApp>
        </Provider>
      </I18nProvider>
    </ApolloProvider>
  );
};
