import './styles/main.min.css';
import './utils/debugger';

import { createAnimation, IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import I18nProvider from 'components/organisms/I18n';
import { LeftSidebar } from 'components/organisms/Sidebar/LeftSidebar';
import { RightSidebar } from 'components/organisms/Sidebar/RightSidebar';
import { UserContext } from 'context/User';
import { ApolloProvider } from 'graphql/ApolloProvider';
import React from 'react';
import { Route } from 'react-router-dom';
import { appPages } from 'settings/appPages';

const App = () => {
  const enterAnimation = (baseEl: any) => {
    const page = createAnimation()
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .addElement(baseEl.querySelector('.page')!)
      .fromTo('transform', 'translateX(0)', 'translateX(100%)');

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(300)
      .addAnimation([page]);
  };

  return (
    <ApolloProvider>
      <I18nProvider>
        <UserContext.Provider>
          <IonApp>
            <IonReactRouter>
              <IonSplitPane contentId="main">
                <LeftSidebar contentId="main" />
                <IonRouterOutlet id="main" animated animation={enterAnimation}>
                  {Object.keys(appPages).map((id) => (
                    <Route
                      key={id}
                      path={appPages[id].url}
                      component={appPages[id].component}
                      exact
                    />
                  ))}
                </IonRouterOutlet>
                <RightSidebar contentId="main" />
              </IonSplitPane>
            </IonReactRouter>
          </IonApp>
        </UserContext.Provider>
      </I18nProvider>
    </ApolloProvider>
  );
};

export default App;
