import './index.min.css';

import { IonAvatar } from '@ionic/react';
import faker from 'faker';
import React from 'react';

type AvatarGroupSize = 'tiny' | 'small' | 'large';

export interface AvatarGroupProps {
  items: string[];
  size: AvatarGroupSize;
}

const avatarGroupSizes: AvatarGroupSize[] = ['tiny', 'small', 'large'];

export const avatarGroups: AvatarGroupProps[] = avatarGroupSizes.map((size) => ({
  items: [...Array(5)].map(() => faker.image.avatar()),
  size,
}));

const AvatarGroup = ({ items, size }: AvatarGroupProps) => {
  return (
    <div className="avatar-group">
      {items.map((item, i) => (
        <div className="avatar-item" key={i}>
          <IonAvatar className={`thumbnail-${size}`}>
            <img src={item} alt="" />
          </IonAvatar>
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
