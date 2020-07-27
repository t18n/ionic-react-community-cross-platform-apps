import './styles/index.min.css';

import {
  IonContent,
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
import logo from 'assets/brand/logo.svg';
import { useToast } from 'hooks/useToast';
import { libraryOutline, search } from 'ionicons/icons';
import { Explore } from 'pages-old/Explore';
import { Home } from 'pages-old/Home';
import { Login } from 'pages-old/Login';
import { Medium } from 'pages-old/Medium';
import { SearchPage } from 'pages-old/Search';
import { Tag } from 'pages-old/Tag';
import React from 'react';
import { Route } from 'react-router-dom';

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
            <Route exact path="/mediums/:slug" component={Medium} />
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
