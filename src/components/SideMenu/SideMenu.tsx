import './SideMenu.scss';

import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRow,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import faker from 'faker';
import { arrowDown, arrowUp, bookmark, close, people } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ThemeService from '../../services/theme';

const SideMenu = () => {
  const [showRecentList, setShowRecentList] = useState(false);
  const [showGroupList, setShowGroupList] = useState(false);
  const [showHashTagList, setShowHashTagList] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(ThemeService.getCurrentSetting());

  const toggle = (target: string) => {
    switch (target) {
      case 'showRecentList':
        setShowRecentList(!showRecentList);
        break;
      case 'showGroupList':
        setShowGroupList(!showGroupList);
        break;
      case 'showHashTagList':
        setShowHashTagList(!showHashTagList);
        break;
      default:
        return;
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    ThemeService.toggleDarkMode(isDarkMode);
  }, [isDarkMode]);

  return (
    <IonMenu type="overlay" side="start" contentId="main" menuId="main" swipeGesture={false}>
      <IonHeader>
        <IonToolbar className="no-border" color="light">
          <IonRow className="ion-no-padding ion-align-items-center">
            <IonCol size="auto">
              <IonAvatar className="menu-avatar">
                <img src={faker.image.avatar()} alt="" />
              </IonAvatar>
            </IonCol>
            <IonCol>
              <div>
                <strong>{faker.name.firstName()}</strong>
              </div>
              <div className="text-sm">
                <IonMenuToggle>
                  <Link to="/profile">
                    <strong>View Profile</strong>
                  </Link>
                </IonMenuToggle>
              </div>
            </IonCol>
            <IonCol size="auto">
              <IonMenuToggle>
                <IonButton fill="clear" color="medium">
                  <IonIcon slot="icon-only" icon={close} />
                </IonButton>
              </IonMenuToggle>
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem lines="full" onClick={() => toggle('showRecentList')}>
            <IonLabel>
              <strong>Recent</strong>
            </IonLabel>
            <IonIcon
              icon={showRecentList ? arrowUp : arrowDown}
              slot="end"
              mode="ios"
              size="small"
            />
          </IonItem>
          {showRecentList && (
            <IonList className="sub-list">
              {[0, 1, 2, 3].map((i) => (
                <IonItem lines="full" key={i}>
                  <IonIcon slot="start" icon={people} color="medium" size="small" />
                  <IonLabel>
                    <div className="text-sm">{faker.lorem.sentence()}</div>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          )}

          <IonItem lines="full" onClick={() => toggle('showGroupList')}>
            <IonLabel color="primary">
              <strong>Groups</strong>
            </IonLabel>
            <IonIcon
              icon={showGroupList ? arrowUp : arrowDown}
              slot="end"
              mode="ios"
              size="small"
            />
          </IonItem>
          {showGroupList && (
            <IonList className="sub-list">
              {[0, 1, 2, 3].map((i) => (
                <IonItem lines="full" key={i}>
                  <IonIcon slot="start" icon={people} color="medium" size="small" />
                  <IonLabel>
                    <div className="text-sm">{faker.company.companyName()}</div>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          )}

          <IonItem lines="full" onClick={() => toggle('showHashTagList')}>
            <IonLabel color="primary">
              <strong>Followed Hashtags</strong>
            </IonLabel>
            <IonIcon
              icon={showHashTagList ? arrowUp : arrowDown}
              slot="end"
              mode="ios"
              size="small"
            />
          </IonItem>

          {showHashTagList && (
            <IonList className="sub-list">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <IonItem lines="full" key={i}>
                  <IonIcon slot="start" icon={bookmark} color="medium" size="small" />
                  <IonLabel>
                    <div className="text-sm">{faker.name.jobType()}</div>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          )}

          <IonMenuToggle>
            <IonItem lines="full" detail={false} routerLink="/landing">
              <IonLabel color="primary">
                <strong>Show Welcome page</strong>
              </IonLabel>
            </IonItem>
          </IonMenuToggle>

          <IonItem lines="full">
            <IonLabel>Dark mode</IonLabel>
            <IonToggle checked={isDarkMode} onIonChange={toggleDarkMode}></IonToggle>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;
