import './index.min.css';

import { menuController } from '@ionic/core';
import { t, Trans } from '@lingui/macro';
import { Toggle } from 'components/atoms/Button';
import { Icon } from 'components/atoms/Icon';
import { Label } from 'components/atoms/Item';
import { Header } from 'components/atoms/Layout/Header';
import { Menu } from 'components/atoms/Layout/Menu';
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

interface LeftSidebarProps {
  contentId: string;
}

export const LeftSidebar = ({ contentId }: LeftSidebarProps) => {
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
   * Close menu
   */
  const closeMenu = async () => await menuController.close('left-sidebar');

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
    <Menu
      type="overlay"
      side="start"
      contentId={contentId}
      menuId="left-sidebar"
      className="left-sidebar"
      swipeGesture
    >
      <div className="left-sidebar__content">
        <List color="light">
          <Header slot="start">
            <Toolbar className="border-0" color="light">
              <Logo extraClasses="left-sidebar__logo" />
            </Toolbar>
          </Header>

          {/* My profile */}

          {ME_data?.me ? (
            <Item
              lines="none"
              detail={false}
              onClick={() => {
                closeMenu();
                setShowPopover(true);
              }}
              type="button"
              className="cursor-pointer mt-s"
            >
              <Thumbnail slot="start" className="radius-all small">
                <Img src={ME_data.me.cover} />
              </Thumbnail>

              <Label color="dark">
                <Text as="a" type="subtitle-l" fontWeight="text-bold" extraClasses="ml-s">
                  {ME_data.me?.name}
                </Text>
              </Label>
            </Item>
          ) : (
            <Item
              lines="none"
              detail={false}
              onClick={closeMenu}
              routerLink={loginPage.url}
              className={`mt-s left-sidebar__item ${
                location.pathname === loginPage.url && 'active'
              }`}
            >
              <Icon icon={loginPage.icon} slot="start" size="large" color="medium" />
              <Label color="medium">
                <Text as="a" fontWeight="text-bold" type="subtitle-l" extraClasses="ml-s">
                  <Trans id={loginPage.title} />
                </Text>
              </Label>
            </Item>
          )}

          {/* List of pages */}
          {Object.keys(appPages).map(
            (id) =>
              !excludedPages.includes(id) && (
                <Item
                  key={appPages[id].title}
                  className={`mt-s left-sidebar__item ${
                    location.pathname === appPages[id].url && 'active'
                  }`}
                  lines="none"
                  routerLink={appPages[id].url}
                  routerDirection="forward"
                  detail={false}
                  onClick={closeMenu}
                >
                  <Icon icon={appPages[id].icon} slot="start" size="large" color="medium" />
                  <Label color="medium">
                    <Text as="a" fontWeight="text-bold" type="subtitle-l" extraClasses="ml-s">
                      <Trans id={appPages[id].title} />
                    </Text>
                  </Label>
                </Item>
              )
          )}
        </List>
      </div>

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
        <List className="h-100p w-100p bg-transparent flex flex-col items-center pt-m pb-m">
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

      {LOGOUT_loading && <Loading isOpen={LOGOUT_loading} message={t`message.loggingOut`} />}

      <Toast
        isOpen={toast?.status}
        position={toast?.position}
        message={toast?.message}
        duration={toast?.duration}
        color={toast?.color}
        onDidDismiss={() => setToast({ ...toast, status: false })}
      />
    </Menu>
  );
};
