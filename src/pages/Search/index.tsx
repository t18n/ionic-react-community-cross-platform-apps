import './index.min.css';

import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from '@ionic/react';
import { t } from '@lingui/macro';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import ConnectItem from 'components/molecules/ConnectItem';
import { connections } from 'components/molecules/ConnectItem';
import FollowCard from 'components/molecules/FollowCard';
import { follows } from 'components/molecules/FollowCard';
import SearchSuggestions from 'components/organisms/SearchSuggestions';
import { useSearchBar } from 'hooks/useSearchbar';
import { chevronDown } from 'ionicons/icons';
import React from 'react';

const Search = () => {
  const { isSearchFocused, onSearchCancel, onSearchChange, searchTerm } = useSearchBar();

  const goToMedium = () => {
    console.log('goToMedium');
  };

  return (
    <IonPage className="search-page">
      <IonHeader>
        <Breadcrumb
          title={t`page.title.search`}
          searchBar={{
            onSearchChange: onSearchChange,
            onSearchCancel: onSearchCancel,
          }}
        />
        <SearchSuggestions isFocused={isSearchFocused} searchTerm={searchTerm} />

        <IonToolbar color="light" className="toolbar-shadow border-0">
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
              <IonIcon icon={chevronDown} />
            </IonButton>
            <IonButton className="scroll-item" fill="outline" color="medium" size="small">
              Level
              <IonIcon icon={chevronDown} />
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
