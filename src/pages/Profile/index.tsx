import './index.min.css';

import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonSearchbar,
  IonText,
  IonToolbar,
} from '@ionic/react';
import ProfileAbout from 'components/ProfileAbout';
import ProfileAccomplishments from 'components/ProfileAccomplishments';
import ProfileActivity from 'components/ProfileActivity';
import ProfileContact from 'components/ProfileContact';
import ProfileDashboard from 'components/ProfileDashboard/ProfileDashboard';
import ProfileEducation from 'components/ProfileEducation';
import ProfileExperience from 'components/ProfileExperience/ProfileExperience';
import ProfileHighlights from 'components/ProfileHighlights';
import ProfilePeople from 'components/ProfilePeople';
import ProfileSkills from 'components/ProfileSkills';
import faker from 'faker';
import { add, create, settings } from 'ionicons/icons';
import React from 'react';

const Profile = () => {
  return (
    <IonPage className="profile-page">
      <IonHeader>
        <IonToolbar className="toolbar-search no-border" color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>

          <div className="searchbar-wrapper">
            <IonSearchbar placeholder=""></IonSearchbar>
          </div>

          <IonButtons slot="end" className="pos-rlt">
            <IonButton color="white" routerLink="/settings">
              <IonIcon slot="icon-only" icon={settings} mode="md" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

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
                <IonIcon slot="icon-only" icon={create} mode="md" />
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
            <IonIcon icon={add} mode="md" />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
