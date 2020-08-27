import './index.min.css';

import { IonMenu } from '@ionic/react';
import { t, Trans } from '@lingui/macro';
import { Button, Toggle } from 'components/atoms/Button';
import { icChevronDown, Icon } from 'components/atoms/Icon';
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
import ThemeService from 'services/theme';
import { appPages } from 'settings/appPages';
import { LocaleId } from 'settings/locale';

import { Loading } from '../../atoms/Loading/index';
import { activateLanguage } from '../I18n/utils';

const SideIonMenu = () => {
  const [isDarkMode, setIsDarkMode] = useState(ThemeService.getCurrentSetting());
  const [showPopover, setShowPopover] = useState(false);
  const [toast, setToast] = useToast(null);

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

  // Logout an user
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
    <IonMenu type="overlay" side="start" contentId="main" menuId="main" swipeGesture={false}>
      <Content>
        <List color="light">
          <Header>
            <Toolbar className="border-0" color="light">
              <Logo extraClasses="side-menu__logo" />
            </Toolbar>
          </Header>

          {Object.keys(appPages).map(
            (id) =>
              !excludedPages.includes(id) && (
                <Item
                  key={appPages[id].title}
                  lines="none"
                  routerLink={appPages[id].url}
                  detail={false}
                >
                  <Icon icon={appPages[id].icon} slot="start" size="large" color="medium" />
                  <Label color="medium">
                    <Text>
                      <h6>{appPages[id].title}</h6>
                    </Text>
                  </Label>
                </Item>
              )
          )}

          {ME_data?.me ? (
            <Item lines="none" slot="end" detail={false} className="mt-l">
              <Thumbnail slot="start" className="radius-all">
                <Img src={ME_data.me.cover} />
              </Thumbnail>

              <div className="flex flex-col items-start justify-center">
                <span className="subtitle-large text-bold">{ME_data.me?.name}</span>
                <span className="subtitle-small color-medium">{ME_data.me?.slug}</span>
              </div>

              <Button onClick={() => setShowPopover(true)} fill="clear" slot="end">
                <Icon slot="icon-only" icon={icChevronDown} size="large" color="medium" />
              </Button>

              <Popover
                isOpen={showPopover}
                onDidDismiss={() => setShowPopover(false)}
                className="bg-overlay"
              >
                <ListHeader className="text-center">
                  <Label color="dark">
                    <Trans id="label.item.preferences" />
                  </Label>
                </ListHeader>
                <List className="h-100p w-100p bg-transparent flex flex-col items-center py-m">
                  {/* Dark mode */}
                  <Item lines="none">
                    <Toggle slot="start" checked={isDarkMode} onIonChange={toggleDarkMode} />
                    <Label color="medium">
                      <Text>
                        <Trans id="label.item.darkMode" />
                      </Text>
                    </Label>
                  </Item>

                  {/* Language */}
                  <Item>
                    <Label>
                      <Trans id="label.item.language" />
                    </Label>
                    <Select
                      value={LocaleId.EN}
                      okText="Select"
                      cancelText="Cancel"
                      onIonChange={(e: any) => activateLanguage(e.detail.value)}
                    >
                      <SelectOption value={LocaleId.VI}>
                        <Trans id="label.item.vietnamese" />
                      </SelectOption>
                      <SelectOption value={LocaleId.EN}>
                        <Trans id="label.item.english" />
                      </SelectOption>
                    </Select>
                  </Item>

                  {/* Logout */}
                  <Item lines="none" onClick={onLogout}>
                    <Label color="medium">
                      <Text>
                        <Trans id="label.item.logOut" />
                      </Text>
                    </Label>
                  </Item>
                </List>
              </Popover>
            </Item>
          ) : (
            <Item lines="none" slot="end" detail={false} className="mt-l">
              <Item key={loginPage.title} lines="none" routerLink={loginPage.url} detail={false}>
                <Icon icon={loginPage.icon} slot="start" size="large" color="medium" />
                <Label color="medium">
                  <Text>
                    <h6>{loginPage.title}</h6>
                  </Text>
                </Label>
              </Item>
            </Item>
          )}
        </List>
      </Content>

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
