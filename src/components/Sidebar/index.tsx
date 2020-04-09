import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { libraryOutline, logIn, logOut, search } from 'ionicons/icons';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import logo from '../../assets/brand/logo-black.svg';
import { Footer } from '../../components/Footer';
import { Explore } from '../../pages/Explore';
import { Home } from '../../pages/Home';
import { Login } from '../../pages/Login';
import { SearchPage } from '../../pages/Search';
import { Tag } from '../../pages/Tag';

export const Sidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = async () => {
    console.log('Logging out...');
    setIsLoggedIn(false);
  };

  return (
    <IonReactRouter>
      <IonSplitPane contentId="main" when="(min-width: 850px)">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>
                <img src={logo} alt="Brightizen" height="35" />
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList lines="none">
              <IonMenuToggle autoHide={false}>
                <IonItem routerLink="/explore">
                  <IonIcon icon={libraryOutline} slot="start" />
                  Explore
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle autoHide={false}>
                <IonItem routerLink="/search">
                  <IonIcon icon={search} slot="start" />
                  Search
                </IonItem>
              </IonMenuToggle>
              {isLoggedIn ? (
                <IonMenuToggle autoHide={false} class="bottom-item">
                  <IonItem onClick={() => logout()} lines="none" button={true}>
                    <IonIcon slot="start" icon={logOut} />
                    Log Out
                  </IonItem>
                </IonMenuToggle>
              ) : (
                <IonMenuToggle autoHide={false} class="bottom-item">
                  <IonItem routerLink="/login">
                    <IonIcon slot="start" icon={logIn} />
                    Log In
                  </IonItem>
                </IonMenuToggle>
              )}
            </IonList>
          </IonContent>
        </IonMenu>
        <IonPage id="main">
          <IonRouterOutlet>
            <Route exact path="/" component={Home} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/tags/:tagId" component={Tag} />
          </IonRouterOutlet>
        </IonPage>
      </IonSplitPane>
      <Footer />
    </IonReactRouter>
  );
};
