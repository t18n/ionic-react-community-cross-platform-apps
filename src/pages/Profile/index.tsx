import './index.min.css';

import {
  IonAvatar,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonPage,
  IonText,
} from '@ionic/react';
import { t } from '@lingui/macro';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import ProfileAbout from 'components/organisms/ProfileAbout';
import ProfileAccomplishments from 'components/organisms/ProfileAccomplishments';
import ProfileActivity from 'components/organisms/ProfileActivity';
import ProfileContact from 'components/organisms/ProfileContact';
import ProfileDashboard from 'components/organisms/ProfileDashboard';
import ProfileEducation from 'components/organisms/ProfileEducation';
import ProfileExperience from 'components/organisms/ProfileExperience';
import ProfileHighlights from 'components/organisms/ProfileHighlights';
import ProfilePeople from 'components/organisms/ProfilePeople';
import ProfileSkills from 'components/organisms/ProfileSkills';
import SearchSuggestions from 'components/organisms/SearchSuggestions';
import faker from 'faker';
import { useSearchBar } from 'hooks/useSearchbar';
import { add, create } from 'ionicons/icons';
import React from 'react';

const Profile = () => {
  const { isSearchFocused, onSearchCancel, onSearchChange, searchTerm } = useSearchBar();

  return (
    <IonPage className="profile-page">
      <Breadcrumb
        title={t`page.title.profile`}
        searchBar={{
          onSearchChange: onSearchChange,
          onSearchCancel: onSearchCancel,
        }}
      />
      <SearchSuggestions isFocused={isSearchFocused} searchTerm={searchTerm} />

      <IonContent className="bg-light">
        <div className="panel">
          <div
            className="cover-background"
            style={{ backgroundImage: `url(${faker.image.avatar()})` }}
          ></div>

          <div className="panel-body">
            <div className="profile-summary">
              <IonAvatar className="profile-image">
                <img src={faker.image.avatar()} alt="" />
              </IonAvatar>
              <IonButton fill="clear" color="primary" size="small" className="button-edit">
                <IonIcon slot="icon-only" icon={create} />
              </IonButton>
              <div className="profile-name">
                {faker.name.firstName()}
                <div className="online-status active"></div>
              </div>
              <div className="m-b-sm">{faker.name.jobTitle()}</div>
              <div>
                <div className="text-sm">{faker.address.streetName()}</div>
                <div className="text-sm">
                  {faker.address.country()} ·{' '}
                  <IonText color="primary">
                    <strong>{faker.random.number()} connection</strong>
                  </IonText>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProfileHighlights />
        <ProfileAbout />
        <ProfileDashboard />
        <ProfileActivity />
        <ProfileExperience />
        <ProfileEducation />
        <ProfileSkills />
        <ProfileAccomplishments />
        <ProfileContact />
        <ProfilePeople />

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
