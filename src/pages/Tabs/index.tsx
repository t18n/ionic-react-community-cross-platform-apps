import {
  IonBadge,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { Settings } from 'context/Settings';
import { briefcase, create, home, notificationsOutline, people } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import Home from '../Home';
import Invitations from '../Invitations';
import Media from '../Media';
import Medium from '../Medium';
import Network from '../Network';
import Notifications from '../Notifications';
import PostDetail from '../PostDetail';
import Profile from '../Profile';
import Recommendations from '../Recommendations';
import Search from '../Search';

const Tabs = () => {
  return (
    <Settings.Consumer>
      {({ openModal }) => (
        <IonTabs>
          <IonRouterOutlet>
            <Redirect exact path="/tabs" to="/home" />
            <Route path="/" component={Home} exact />
            <Route path="/post/:id" component={PostDetail} exact />
            <Route path="/network" component={Network} exact />
            <Route path="/network/invitations" component={Invitations} exact />
            <Route path="/network/recommendations" component={Recommendations} exact />
            <Route path="/notifications" component={Notifications} exact />
            <Route path="/media" component={Media} exact />
            <Route path="/media/medium" component={Medium} exact />
            <Route path="/profile" component={Profile} exact />
            <Route path="/search" component={Search} exact />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/">
              <IonIcon icon={home} />
            </IonTabButton>
            <IonTabButton tab="network" href="/network">
              <IonIcon icon={people} mode="md" />
            </IonTabButton>
            <IonTabButton onClick={() => openModal('newPost')}>
              <IonIcon icon={create} mode="md" />
            </IonTabButton>
            <IonTabButton tab="notifications" href="/notifications">
              <IonIcon icon={notificationsOutline} />
              <IonBadge color="danger">9</IonBadge>
            </IonTabButton>
            <IonTabButton tab="media" href="/media">
              <IonIcon icon={briefcase} mode="ios" />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      )}
    </Settings.Consumer>
  );
};

export default Tabs;
