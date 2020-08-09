import './styles/main.min.css';
import './utils/debugger';

import { IonApp, IonRouterOutlet, IonSplitPane, useIonViewDidEnter } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import I18nProvider from 'components/organisms/I18n';
import Modals from 'components/organisms/Modals';
import SideMenu from 'components/organisms/SideMenu';
import Provider from 'context/Provider';
import { ApolloProvider } from 'graphql/ApolloProvider';
import Tabs from 'pages/Tabs';
import { Welcome } from 'pages/Welcome';
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { appPages } from 'settings/appPages';

export const App = () => {
  const isAuthed = false;

  // useEffect(() => {
  //   console.log('hey', document.querySelectorAll('ion-icon'));

  //   // Set all tablet svg icons stroke to 1.5
  //   if (window) {
  //     document.querySelectorAll('ion-icon').forEach((e) => {
  //       e.shadowRoot &&
  //         e.shadowRoot.querySelector('svg.icon-tabler') &&
  //         e.shadowRoot.querySelector('svg.icon-tabler').setAttribute('style', 'stroke-width: 1.5');
  //     });
  //   }
  // }, []);

  return (
    <ApolloProvider>
      <I18nProvider>
        <Provider>
          <IonApp>
            {/* <Modals /> */}
            <IonReactRouter>
              <IonSplitPane contentId="main">
                <Modals />
                <SideMenu />
                <IonRouterOutlet id="main">
                  {appPages.map((page) => {
                    if (page.url === '/') {
                      return (
                        <Route
                          key="/"
                          path="/"
                          render={() => (isAuthed ? <Tabs /> : <Welcome />)}
                        />
                      );
                    } else {
                      return <Route path={page.url} component={page.component} exact />;
                    }
                  })}
                </IonRouterOutlet>
              </IonSplitPane>
            </IonReactRouter>
          </IonApp>
        </Provider>
      </I18nProvider>
    </ApolloProvider>
  );
};
