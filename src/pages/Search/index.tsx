import './index.min.css';

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
import ConnectItem from 'components/molecules/ConnectItem';
import { connections } from 'components/molecules/ConnectItem';
import FollowCard from 'components/molecules/FollowCard';
import { follows } from 'components/molecules/FollowCard';
import { chevronDown } from 'ionicons/icons';
import React, { useState } from 'react';

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
        <IonToolbar className="toolbar-search border-0" color="primary">
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
        <IonToolbar color="white" className="toolbar-shadow border-0">
          <div className="scroll-x">
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
              <IonIcon icon={chevronDown} mode="ios" />
            </IonButton>
            <IonButton className="scroll-item" fill="outline" color="medium" size="small">
              Level
              <IonIcon icon={chevronDown} mode="ios" />
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
            <div className="scroll-x">
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
