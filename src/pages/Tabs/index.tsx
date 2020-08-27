import {
  IonBadge,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { icNote } from 'components/atoms/Icon';
import { Settings } from 'context/Settings';
import React from 'react';
import { Route } from 'react-router-dom';
import { appPages } from 'settings/appPages';

const Tabs = () => {
  const homePage = appPages['home'];
  const networkPage = appPages['network'];
  const nofiticationPage = appPages['notifications'];
  const mediaPage = appPages['media'];

  return (
    <Settings.Consumer>
      {({ openModal }) => (
        <IonTabs>
          <IonRouterOutlet>
            <Route path={homePage.url} component={homePage.component} exact />
            <Route path={networkPage.url} component={homePage.component} exact />
            <Route path={nofiticationPage.url} component={homePage.component} exact />
            <Route path={mediaPage.url} component={homePage.component} exact />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab={homePage.title} href={homePage.url}>
              <IonIcon icon={homePage.icon} />
            </IonTabButton>
            <IonTabButton tab={networkPage.title} href={networkPage.url}>
              <IonIcon icon={networkPage.icon} />
            </IonTabButton>
            <IonTabButton onClick={() => openModal('newPost')}>
              <IonIcon icon={icNote} />
            </IonTabButton>
            <IonTabButton tab={nofiticationPage.title} href={nofiticationPage.url}>
              <IonIcon icon={nofiticationPage.icon} />
              <IonBadge color="danger">9</IonBadge>
            </IonTabButton>
            <IonTabButton tab={mediaPage.title} href={mediaPage.url}>
              <IonIcon icon={mediaPage.icon} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      )}
    </Settings.Consumer>
  );
};

export default Tabs;
