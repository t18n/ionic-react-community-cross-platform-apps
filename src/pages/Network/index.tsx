import './index.min.css';

import {
  IonButton,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonPage,
  IonRow,
} from '@ionic/react';
import { t } from '@lingui/macro';
import { Link } from 'components/atoms/Layout/Link';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import ConnectItem from 'components/molecules/ConnectItem';
import { connections } from 'components/molecules/ConnectItem';
import InvitationItem from 'components/molecules/InvitationItem';
import { invitations } from 'components/molecules/InvitationItem';
import NewsletterItem from 'components/molecules/NewsletterItem';
import { newsletters } from 'components/molecules/NewsletterItem';
import ProfileCard from 'components/organisms/ProfileCard';
import { profiles } from 'components/organisms/ProfileCard';
import SearchSuggestions from 'components/organisms/SearchSuggestions';
import { useSearchBar } from 'hooks/useSearchbar';
import { personAdd } from 'ionicons/icons';
import React from 'react';

export const Network = () => {
  const { isSearchFocused, onSearchCancel, onSearchChange, searchTerm } = useSearchBar();

  return (
    <IonPage>
      <Breadcrumb
        title={t`page.title.network`}
        searchBar={{
          onSearchChange: onSearchChange,
          onSearchCancel: onSearchCancel,
        }}
      />
      <SearchSuggestions isFocused={isSearchFocused} searchTerm={searchTerm} />

      <IonContent className="bg-light">
        <div className="panel">
          <div className="panel-header">
            <IonRow>
              <IonCol>{invitations.length} new invitations</IonCol>
              <IonCol size="auto">
                <Link href="/network/invitations">
                  <span className="text-sm">
                    <strong>See all</strong>
                  </span>
                </Link>
              </IonCol>
            </IonRow>
          </div>

          <div className="panel-body no-padding">
            {invitations.map((invitation, i) => (
              <InvitationItem
                key={i}
                connectionCount={invitation.connectionCount}
                firstName={invitation.firstName}
                badge={invitation.badge}
                avatar={invitation.avatar}
              />
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">Newsletter recommened</div>

          <div className="panel-body has-grid">
            <IonRow>
              {newsletters.map((newsletter, i) => (
                <IonCol size="6" key={i}>
                  <NewsletterItem
                    cover={newsletter.cover}
                    content={newsletter.content}
                    badge={newsletter.badge}
                    avatar={newsletter.avatar}
                  />
                </IonCol>
              ))}
            </IonRow>

            <IonButton
              expand="block"
              fill="clear"
              color="primary"
              size="small"
              routerLink="network/recommendations"
            >
              See all
            </IonButton>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">Pages recommended</div>

          <div className="panel-body has-grid">
            <IonRow>
              {profiles.map((profile, i) => (
                <IonCol size="6" key={i}>
                  <ProfileCard
                    avatar={profile.avatar}
                    followerCount={profile.followerCount}
                    cover={profile.cover}
                    name={profile.name}
                  />
                </IonCol>
              ))}
            </IonRow>

            <IonButton
              expand="block"
              fill="clear"
              color="primary"
              size="small"
              routerLink="network/recommendations"
            >
              See all
            </IonButton>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">People you may know</div>

          <div className="panel-body has-grid">
            <IonRow>
              {connections.map((connection, i) => (
                <IonCol size="6" key={i}>
                  <ConnectItem
                    connectionCount={connection.connectionCount}
                    firstName={connection.firstName}
                    badge={connection.badge}
                    avatar={connection.avatar}
                  />
                </IonCol>
              ))}
            </IonRow>

            <IonButton
              expand="block"
              fill="clear"
              color="primary"
              size="small"
              routerLink="network/recommendations"
            >
              See all
            </IonButton>
          </div>
        </div>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={personAdd} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};
