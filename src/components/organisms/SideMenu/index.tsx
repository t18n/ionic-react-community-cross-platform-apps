import './index.min.css';

import { IonMenu } from '@ionic/react';
import { Button, Toggle } from 'components/atoms/Button';
import { icChevronDown, Icon } from 'components/atoms/Icon';
import { Label } from 'components/atoms/Item';
import { Content } from 'components/atoms/Layout/Content';
import { Header } from 'components/atoms/Layout/Header';
import { Toolbar } from 'components/atoms/Layout/Toolbar';
import { Item, List, ListHeader } from 'components/atoms/List';
import { SkeletonText } from 'components/atoms/Loading';
import { Logo } from 'components/atoms/Logo';
import { Thumbnail } from 'components/atoms/Media';
import { Popover } from 'components/atoms/Popover';
import { Select, SelectOption } from 'components/atoms/Select';
import { Text } from 'components/atoms/Text';
import React, { useEffect, useState } from 'react';
import ThemeService from 'services/theme';
import { appPages } from 'settings/appPages';
import { LocaleId } from 'settings/locale';

import { activateLanguage } from '../I18n/utils';

const SideIonMenu = () => {
  const [isDarkMode, setIsDarkMode] = useState(ThemeService.getCurrentSetting());
  const [showPopover, setShowPopover] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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

          {appPages.map((page) => (
            <Item key={page.title} lines="none" routerLink={page.url} detail={false}>
              <Icon icon={page.icon} slot="start" size="large" color="medium" />
              <Label color="medium">
                <Text>
                  <h6>{page.title}</h6>
                </Text>
              </Label>
            </Item>
          ))}

          <Item lines="none" slot="end" detail={false} className="mt-l">
            <Thumbnail slot="start" className="radius-all">
              <SkeletonText animated />
            </Thumbnail>

            <div className="flex flex-col items-center justify-start">
              <span className="subtitle-large text-bold">Brightizen</span>
              <span className="subtitle-small color-medium">@brightizen</span>
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
                <Label color="dark">Preferences</Label>
              </ListHeader>
              <List className="h-100p w-100p bg-transparent flex flex-col items-center py-m">
                <Item lines="none">
                  <Toggle slot="start" checked={isDarkMode} onIonChange={toggleDarkMode} />
                  <Label color="medium">
                    <Text>Dark mode</Text>
                  </Label>
                </Item>
                <Item>
                  <Label>Hair Color</Label>
                  <Select
                    value={LocaleId.EN}
                    okText="Select"
                    cancelText="Cancel"
                    onIonChange={(e: any) => activateLanguage(e.detail.value)}
                  >
                    <SelectOption value={LocaleId.VI}>Vietnamese</SelectOption>
                    <SelectOption value={LocaleId.EN}>English</SelectOption>
                  </Select>
                </Item>
              </List>
            </Popover>
          </Item>
        </List>
      </Content>
    </IonMenu>
  );
};

export default SideIonMenu;
