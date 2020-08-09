import './index.min.css';

import { IonButton, IonCol, IonIcon, IonRow, IonText, IonThumbnail } from '@ionic/react';
import { icWorld } from 'components/atoms/Icon';
import AvatarGroup, { AvatarGroupProps } from 'components/organisms/AvatarGroup';
import faker from 'faker';
import React from 'react';

export type FollowCardProps = Omit<AvatarGroupProps, 'size'> & {
  onClickDetail?: () => void;
  avatar: string;
  connectionCount: number;
  badge: string;
  firstName: string;
  aboutMe: string;
  timestamp: string;
  location: string;
};

export const follows: FollowCardProps[] = [...Array(12)].map(() => ({
  items: [...Array(6)].map(() => faker.image.avatar()),
  avatar: faker.image.avatar(),
  connectionCount: faker.random.number(),
  badge: faker.name.jobTitle(),
  firstName: faker.name.firstName(),
  aboutMe: faker.lorem.sentences(),
  timestamp: `${faker.date.past().getDay()}d`,
  location: faker.address.city(),
}));

const FollowCard = ({
  onClickDetail,
  avatar,
  badge,
  aboutMe,
  items,
  connectionCount,
  location,
}: FollowCardProps) => {
  return (
    <div className="follow-card">
      <IonRow onClick={onClickDetail}>
        <IonCol size="auto">
          <IonThumbnail>
            <img src={avatar} alt="" />
          </IonThumbnail>
        </IonCol>
        <IonCol>
          <div>
            <strong>{badge}</strong>
          </div>
          <div className="text-sm">{aboutMe}</div>
          <div className="text-sm">
            <IonText color="medium">{location}</IonText>
          </div>

          <AvatarGroup items={items} size="small" />
          <IonText color="medium">
            <span className="text-xs">{connectionCount} connections</span>
          </IonText>
        </IonCol>
        <IonCol size="auto" className="ion-align-items-start">
          <IonButton fill="clear" color="medium" size="small" className="button-no-padding">
            <IonIcon slot="icon-only" icon={icWorld} size="medium" />
          </IonButton>
        </IonCol>
      </IonRow>
    </div>
  );
};

export default FollowCard;
