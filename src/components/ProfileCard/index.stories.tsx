import { IonCol, IonRow } from '@ionic/react';
import React from 'react';

import ProfileCard, { profiles } from '.';

export default {
  title: 'Profile Card',
  component: ProfileCard,
};

export const Default = () =>
  profiles.map((profile, i) => (
    <IonRow key={i}>
      <IonCol size="6">
        <ProfileCard
          avatar={profile.avatar}
          followerCount={profile.followerCount}
          cover={profile.cover}
          name={profile.name}
        />
      </IonCol>
    </IonRow>
  ));
