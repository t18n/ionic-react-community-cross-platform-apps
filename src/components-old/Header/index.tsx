import './styles/index.min.css';

import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonLoading,
  IonMenuButton,
  IonMenuToggle,
  IonPopover,
  IonRouterLink,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToast,
  IonToolbar,
} from '@ionic/react';
import { logOut } from 'ionicons/icons';
import React, { FC, ReactNode, useState } from 'react';

import { useLogoutUser } from '../../graphql/operation/user/mutation';
import { useLoggedInUser } from '../../graphql/operation/user/query';
import { ME } from '../../graphql/operation/user/shape';
import { useToast } from '../../hooks/useToast';
import locales, { LocaleId } from '../../settings/locale';
import { activateLanguage } from '../I18n/utils';
import { LazyImg } from '../LazyImg';
import mcl from './styles/index.pcss.json';

export interface HeaderProps {
  title: ReactNode;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  const [showPopover, setShowPopover] = useState(false);
  const [toast, setToast] = useToast(null);

  const { data: ME_data } = useLoggedInUser();

  const [logout, { loading: LOGOUT_loading }] = useLogoutUser();

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

      setShowPopover(false);
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
    <IonHeader translucent={true} className={mcl.header}>
      <IonToolbar className={mcl.toolbar}>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle slot="start">{title}</IonTitle>

        {/* Header Options */}
        <div className={mcl.headerOptions} onClick={() => setShowPopover(!showPopover)}>
          {ME_data && ME_data.me ? (
            <>
              <span className={mcl.userFirstname}>{ME_data.me?.name}</span>
              <IonAvatar className={mcl.avatar}>
                <LazyImg lazySrc={ME_data.me.cover} alt={`${ME_data.me?.name} avatar`} />
              </IonAvatar>
            </>
          ) : (
            <IonRouterLink routerLink="/login">Log In</IonRouterLink>
          )}

          <IonPopover
            cssClass={mcl.optionPopover}
            isOpen={showPopover}
            onDidDismiss={(e) => setShowPopover(false)}
            animated
          >
            <IonSelect
              value={LocaleId.EN}
              placeholder="Language"
              onIonChange={(e) => activateLanguage(e.detail.value)}
              slot="end"
            >
              {Object.keys(locales).map((locale) => (
                <IonSelectOption key={locale} value={locales[locale].id}>
                  {locales[locale].name}
                </IonSelectOption>
              ))}
            </IonSelect>

            {ME_data && ME_data.me && (
              <IonMenuToggle autoHide={false} class="bottom-item">
                <IonButton onClick={onLogout}>
                  <IonIcon slot="start" icon={logOut} />
                  Log Out
                </IonButton>
              </IonMenuToggle>
            )}

            {LOGOUT_loading && <IonLoading isOpen={LOGOUT_loading} message={'Logging out...'} />}

            <IonToast
              isOpen={toast?.status}
              position={toast?.position}
              message={toast?.message}
              duration={toast?.duration}
              color={toast?.color}
              onDidDismiss={() => setToast({ ...toast, status: false })}
            />
          </IonPopover>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};
