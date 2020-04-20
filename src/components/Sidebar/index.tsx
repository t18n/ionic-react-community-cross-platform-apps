import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonLoading,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToast,
  IonToolbar,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { libraryOutline, logIn, logOut, personCircleOutline, search } from 'ionicons/icons';
import React from 'react';
import { Route } from 'react-router-dom';

import logo from '../../assets/brand/logo-black.svg';
import { Footer } from '../../components/Footer';
import { useLogoutUser } from '../../graphql/operation/user/mutation';
import { useLoggedInUser } from '../../graphql/operation/user/query';
import { ME } from '../../graphql/operation/user/shape';
import { useToast } from '../../hooks/useToast';
import { Explore } from '../../pages/Explore';
import { Home } from '../../pages/Home';
import { Login } from '../../pages/Login';
import { SearchPage } from '../../pages/Search';
import { Tag } from '../../pages/Tag';

export const Sidebar = () => {
  const { data: ME_data } = useLoggedInUser();
  const [logout, { loading: LOGOUT_loading }] = useLogoutUser();

  const [toast, setToast] = useToast(null);

  // Logout an user
  const onLogout = async (e) => {
    e.preventDefault();

    try {
      await logout({
        update(cache) {
          // const { me } = cache.readQuery({ query: ME });
          cache.writeQuery({
            query: ME,
            data: { me: null },
          });
        },
      });
    } catch (e) {
      setToast({
        status: true,
        position: 'bottom',
        message: e,
        duration: 200,
        color: 'danger',
      });
      return;
    }
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
              {ME_data && ME_data.me && (
                <IonMenuToggle autoHide={false}>
                  <IonItem routerLink="/profile">
                    <IonIcon icon={personCircleOutline} slot="start" />
                    {ME_data.me?.name}
                  </IonItem>
                </IonMenuToggle>
              )}
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
              {ME_data && ME_data.me ? (
                <IonMenuToggle autoHide={false} class="bottom-item">
                  <IonItem onClick={onLogout} lines="none" button={true}>
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

      <IonToast
        isOpen={toast?.status}
        position={toast?.position}
        message={toast?.message}
        duration={toast?.duration}
        color={toast?.color}
        onDidDismiss={() => setToast({ ...toast, status: false })}
      />

      {LOGOUT_loading && <IonLoading isOpen={LOGOUT_loading} message={'Logging out...'} />}
    </IonReactRouter>
  );
};
