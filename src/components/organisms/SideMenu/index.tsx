import './index.min.css';

import { IonMenu } from '@ionic/react';
import { t, Trans } from '@lingui/macro';
import { Toggle } from 'components/atoms/Button';
import { Icon } from 'components/atoms/Icon';
import { Label } from 'components/atoms/Item';
import { Content } from 'components/atoms/Layout/Content';
import { Header } from 'components/atoms/Layout/Header';
import { Toolbar } from 'components/atoms/Layout/Toolbar';
import { Item, List, ListHeader } from 'components/atoms/List';
import { Logo } from 'components/atoms/Logo';
import { Img, Thumbnail } from 'components/atoms/Media';
import { Popover } from 'components/atoms/Popover';
import { Select, SelectOption } from 'components/atoms/Select';
import { Text } from 'components/atoms/Text';
import { Toast } from 'components/atoms/Toast';
import { useLogoutUser } from 'graphql/operation/user/mutation';
import { useLoggedInUser } from 'graphql/operation/user/query';
import { ME } from 'graphql/operation/user/shape';
import { useToast } from 'hooks/useToast';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ThemeService from 'services/theme';
import { appPages } from 'settings/appPages';
import { LocaleId } from 'settings/locale';

import { Loading } from '../../atoms/Loading/index';
import { activateLanguage } from '../I18n/utils';

const SideIonMenu = () => {
  const [isDarkMode, setIsDarkMode] = useState(ThemeService.getCurrentSetting());
  const [showPopover, setShowPopover] = useState(false);
  const [toast, setToast] = useToast(null);
  const location = useLocation();

  const { data: ME_data } = useLoggedInUser();
  const [logout, { loading: LOGOUT_loading }] = useLogoutUser();

  const excludedPages = ['login', 'signup', 'welcome'];

  const loginPage = appPages.login;

  /**
   * Toggle the dark mode
   */
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  /**
   * Logout an user
   */
  const onLogout = async (e) => {
    e.preventDefault();

    try {
      await logout({
        update(cache) {
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

  /**
   * Observe dark mode
   */
  useEffect(() => {
    ThemeService.toggleDarkMode(isDarkMode);
  }, [isDarkMode]);

  return (
    <IonMenu
      type="overlay"
      side="start"
      contentId="main"
      menuId="main"
      swipeGesture={false}
      className="main-menu"
    >
      <Content>
        <List color="light">
          <Header slot="start">
            <Toolbar className="border-0" color="light">
              <Logo extraClasses="main-menu__logo" />
            </Toolbar>
          </Header>

          {/* My profile */}

          {ME_data?.me ? (
            <Item
              lines="none"
              detail={false}
              onClick={() => setShowPopover(true)}
              type="button"
              className="cursor-pointer mt-s"
            >
              <Thumbnail slot="start" className="radius-all small">
                <Img src={ME_data.me.cover} />
              </Thumbnail>

              <Label color="medium">
                <Text as="a" type="subtitle-l" fontWeight="text-bold" extraClasses="ml-s">
                  {ME_data.me?.name}
                </Text>
              </Label>
            </Item>
          ) : (
            <Item lines="none" slot="end" detail={false} className="mt-s main-menu__item">
              <Item key={loginPage.title} lines="none" routerLink={loginPage.url} detail={false}>
                <Icon icon={loginPage.icon} slot="start" size="large" color="medium" />
                <Label color="medium">
                  <Text as="h6">{loginPage.title}</Text>
                </Label>
              </Item>
            </Item>
          )}

          {/* List of pages */}
          {Object.keys(appPages).map(
            (id) =>
              !excludedPages.includes(id) && (
                <Item
                  className={`mt-s main-menu__item ${
                    location.pathname === appPages[id].url && 'active'
                  }`}
                  key={appPages[id].title}
                  lines="none"
                  routerLink={appPages[id].url}
                  detail={false}
                >
                  <Icon icon={appPages[id].icon} slot="start" size="large" color="medium" />
                  <Label color="medium">
                    <Text as="a" fontWeight="text-bold" type="subtitle-l" extraClasses="ml-s">
                      {appPages[id].title}
                    </Text>
                  </Label>
                </Item>
              )
          )}
        </List>
      </Content>

      <Popover
        isOpen={showPopover}
        onDidDismiss={() => setShowPopover(false)}
        className="bg-overlay"
      >
        <ListHeader className="text-center">
          <Label color="dark">
            <Trans id="label.preferences" />
          </Label>
        </ListHeader>
        <List className="h-100p w-100p bg-transparent flex flex-col items-center py-m">
          {/* Dark mode */}
          <Item lines="none" className="mt-s">
            <Toggle slot="start" checked={isDarkMode} onIonChange={toggleDarkMode} />
            <Label color="medium">
              <Text as="span">
                <Trans id="label.darkMode" />
              </Text>
            </Label>
          </Item>

          {/* Language */}
          <Item lines="none" className="mt-s">
            <Label>
              <Trans id="label.language" />
            </Label>
            <Select
              value={LocaleId.EN}
              okText="Select"
              cancelText="Cancel"
              onIonChange={(e: any) => activateLanguage(e.detail.value)}
            >
              <SelectOption value={LocaleId.VI}>
                <Trans id="label.vietnamese" />
              </SelectOption>
              <SelectOption value={LocaleId.EN}>
                <Trans id="label.english" />
              </SelectOption>
            </Select>
          </Item>

          {/* Logout */}
          <Item lines="none" onClick={onLogout} className="cursor-pointer mt-s">
            <Label color="medium">
              <Text as="span">
                <Trans id="label.logOut" />
              </Text>
            </Label>
          </Item>
        </List>
      </Popover>

      {LOGOUT_loading && <Loading isOpen={LOGOUT_loading} message={t`Logging out...`} />}

      <Toast
        isOpen={toast?.status}
        position={toast?.position}
        message={toast?.message}
        duration={toast?.duration}
        color={toast?.color}
        onDidDismiss={() => setToast({ ...toast, status: false })}
      />
    </IonMenu>
  );
};

export default SideIonMenu;
