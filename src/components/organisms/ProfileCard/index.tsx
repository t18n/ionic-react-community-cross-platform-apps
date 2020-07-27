import './index.min.css';

import { IonButton, IonText, IonThumbnail } from '@ionic/react';
import faker from 'faker';
import React from 'react';

export interface ProfileCardProps {
  avatar: string;
  followerCount: number;
  cover: string;
  name: string;
}

export const profiles: ProfileCardProps[] = [...Array(10)].map(() => ({
  avatar: faker.image.avatar(),
  followerCount: faker.random.number(),
  cover: faker.image.nature(),
  name: faker.name.firstName(),
}));

const ProfileCard = ({ avatar, followerCount, cover, name }: ProfileCardProps) => {
  return (
    <div className="page-item">
      <div className="item-background" style={{ backgroundImage: `url(${cover})` }} />
      <div className="item-body">
        <IonThumbnail className="item-thumbnail">
          <img src={avatar} alt="" />
        </IonThumbnail>
        <div className="item-title">
          <strong>{name}</strong>
        </div>
        <IonText color="medium">
          <div className="text-sm">{followerCount} followers</div>
        </IonText>

        <IonButton expand="block" fill="outline" color="primary" size="small">
          Follow
        </IonButton>
      </div>
    </div>
  );
};

export default ProfileCard;
