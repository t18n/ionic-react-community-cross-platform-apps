import { IonRow } from '@ionic/react';
import React from 'react';

import AvatarGroup, { avatarGroups } from './';

export default {
  title: 'Avatar Group',
  component: AvatarGroup,
};

export const Default = () =>
  avatarGroups.map((avatarGroup, i) => (
    <IonRow key={i}>
      <AvatarGroup items={avatarGroup.items} size={avatarGroup.size} />
    </IonRow>
  ));
