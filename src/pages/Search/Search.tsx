import './Search.scss';

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSearchbar,
  IonText,
  IonToolbar,
} from '@ionic/react';
import { chevronDown } from 'ionicons/icons';
import React, { useState } from 'react';

import ConnectItem from '../../components/ConnectItem';
import { connections } from '../../components/ConnectItem';
import FollowCard from '../../components/FollowCard';
import { follows } from '../../components/FollowCard';

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  const onSearchFocus = () => {
    setIsFocused(true);
  };

  const onSearchBlur = () => {
    setIsFocused(false);
  };

  const goToMedium = () => {
    console.log('goToMedium');
  };

  return (
    <IonPage className="search-page">
      <IonHeader>
        <IonToolbar className="toolbar-search no-border" color="primary">
          {!isFocused && (
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
          )}

          <div className="searchbar-wrapper">
            <IonSearchbar
              placeholder="Search"
              showCancelButton="focus"
              onIonFocus={onSearchFocus}
              onIonCancel={onSearchBlur}
            ></IonSearchbar>
          </div>

          {!isFocused && (
            <IonButtons slot="end" className="pos-rlt">
              <IonButton>Filters</IonButton>
            </IonButtons>
          )}
        </IonToolbar>
        <IonToolbar color="white" className="toolbar-shadow no-border">
          <div className="scroll-horizontal">
            <IonButton className="scroll-item" fill="outline" color="medium" size="small">
              People
            </IonButton>
            <IonButton className="scroll-item" fill="outline" color="medium" size="small">
              Media
            </IonButton>
            <IonButton className="scroll-item" fill="outline" color="medium" size="small">
              Content
            </IonButton>
            <IonButton className="scroll-item" fill="outline" color="medium" size="small">
              Companies
            </IonButton>
            <IonButton className="scroll-item" fill="outline" color="medium" size="small">
              School
            </IonButton>
            <IonButton className="scroll-item" fill="outline" color="medium" size="small">
              Date Posted
              <IonIcon icon={chevronDown} mode="md" />
            </IonButton>
            <IonButton className="scroll-item" fill="outline" color="medium" size="small">
              Level
              <IonIcon icon={chevronDown} mode="md" />
            </IonButton>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonItem lines="none" color="light">
          <IonLabel color="medium">
            <div className="text-xs">111,575 results</div>
          </IonLabel>
        </IonItem>

        <div className="search-results">
          {follows.map((follow, i) => (
            <FollowCard
              key={i}
              items={follow.items}
              avatar={follow.avatar}
              connectionCount={follow.connectionCount}
              badge={follow.badge}
              firstName={follow.firstName}
              aboutMe={follow.aboutMe}
              timestamp={follow.timestamp}
              location={follow.location}
              onClickDetail={goToMedium}
            />
          ))}
        </div>

        <div className="panel">
          <div className="panel-header">
            <IonRow>
              <IonCol>People results</IonCol>
              <IonCol size="auto">
                <IonText color="primary">
                  <span className="text-sm">
                    <strong>See all</strong>
                  </span>
                </IonText>
              </IonCol>
            </IonRow>
          </div>
          <div className="panel-body no-padding">
            <div className="scroll-horizontal">
              {connections.map((connection, i) => (
                <div className="scroll-item" key={i}>
                  <ConnectItem
                    connectionCount={connection.connectionCount}
                    firstName={connection.firstName}
                    badge={connection.badge}
                    avatar={connection.avatar}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
