import './styles/index.min.css';

import { menuController } from '@ionic/core';
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterLink,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToast,
  IonToolbar,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { gridOutline, libraryOutline, search } from 'ionicons/icons';
import React from 'react';
import { Route } from 'react-router-dom';

import logo from '../../assets/brand/logo.svg';
import { useToast } from '../../hooks/useToast';
import { Explore } from '../../pages/Explore';
import { Home } from '../../pages/Home';
import { Login } from '../../pages/Login';
import { Medium } from '../../pages/Medium';
import { SearchPage } from '../../pages/Search';
import { Tag } from '../../pages/Tag';
import { Footer } from '../Footer';
import { LazyImg } from '../LazyImg';
import mcl from './styles/index.pcss.json';

export const Sidebar = () => {
  const [toast, setToast] = useToast(null);

  return (
    <IonReactRouter>
      <IonSplitPane className={mcl.pageContent} contentId="main" when="(min-width: 80em)">
        <IonMenu className={mcl.mainMenu} menuId="main-menu" contentId="main-menu-content">
          <IonHeader>
            <IonToolbar>
              <IonRouterLink routerLink="/">
                <IonTitle className={mcl.logo}>
                  <LazyImg lazySrc={logo} alt="Brightizen" />
                </IonTitle>
              </IonRouterLink>
            </IonToolbar>
          </IonHeader>

          <IonContent className="no-scroll" id="main-menu-content">
            <IonList lines="none">
              <IonMenuToggle autoHide={false}>
                <IonItem className={mcl.menuItem} routerLink="/explore">
                  <IonIcon icon={libraryOutline} slot="start" />
                  Explore
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle autoHide={false}>
                <IonItem className={mcl.menuItem} routerLink="/search">
                  <IonIcon icon={search} slot="start" />
                  Search
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>

        <IonPage id="main">
          <IonRouterOutlet>
            <Route exact path="/" component={Home} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/tags/:slug" component={Tag} />
            <Route exact path="/media/:slug" component={Medium} />
          </IonRouterOutlet>
        </IonPage>
      </IonSplitPane>

      {/* Footer */}
      <Footer />

      <IonToast
        isOpen={toast?.status}
        position={toast?.position}
        message={toast?.message}
        duration={toast?.duration}
        color={toast?.color}
        onDidDismiss={() => setToast({ ...toast, status: false })}
      />
    </IonReactRouter>
  );
};
