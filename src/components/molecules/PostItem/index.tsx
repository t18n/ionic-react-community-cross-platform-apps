import './index.min.css';

import { IonAvatar, IonButton, IonCol, IonIcon, IonRow, IonText } from '@ionic/react';
import faker from 'faker';
import React from 'react';

import {
  icChevronDown,
  icHeart,
  icLink,
  icMessage,
  icMoodHappy,
  icShare,
  icThumbDown,
  icThumbUp,
} from '../../atoms/Icon';

export type PostItemProps = {
  onClickDetail?: () => void;
  onClickProfile: () => void;
  reactionCount: number;
  commentCount: number;
  summary: string;
  editTimestamp: string;
  avatar: string;
  badge: string;
  firstName: string;
  cover: string;
};

export const postItems: PostItemProps[] = [...Array(14)].map(() => ({
  onClickDetail: () => console.log('clicked'),
  onClickProfile: () => console.log('clicked'),
  reactionCount: faker.random.number(),
  commentCount: faker.random.number(),
  summary: faker.lorem.sentence(),
  editTimestamp: `${faker.date.past().getUTCDay()}d`,
  avatar: faker.image.avatar(),
  badge: faker.name.jobTitle(),
  firstName: faker.name.firstName(),
  cover: faker.image.nature(),
}));

export const PostItem = ({
  onClickDetail,
  onClickProfile,
  reactionCount,
  commentCount,
  summary,
  editTimestamp,
  avatar,
  badge,
  firstName,
  cover,
}: PostItemProps) => {
  const onCommentClick = () => {
    if (onClickDetail) onClickDetail();
  };

  const onSeeAll = () => {
    if (onClickDetail) onClickDetail();
  };

  const handleGoToProfile = () => {
    onClickProfile();
  };

  return (
    <div className="post-item">
      <IonButton className="post-options" size="small" fill="clear">
        <IonIcon slot="icon-only" icon={icChevronDown} mode="ios" color="medium" />
      </IonButton>

      <IonRow className="post-item-header">
        <IonCol size="auto">
          <IonAvatar className="avatar thumbnail-small" onClick={handleGoToProfile}>
            <img src={avatar} alt="" />
            <div className="avatar-status">
              <div className="online-status active"></div>
            </div>
          </IonAvatar>
        </IonCol>
        <IonCol>
          <div className="text-sm text-ellipsis">
            <strong>{firstName}</strong>
          </div>
          <div className="text-xs text-ellipsis">
            <IonText color="medium">{badge}</IonText>
          </div>
          <div className="text-xs text-ellipsis">
            <IonText color="medium">{editTimestamp} · Edited</IonText>
          </div>
        </IonCol>
      </IonRow>

      <div className="post-item-body" onClick={onSeeAll}>
        <div className="post-item-description text-sm">
          {summary}
          <IonText color="medium">...see expand</IonText>
        </div>

        <div className="post-item-media">
          <img src={cover} alt="" />
          <div className="media-source">
            <div className="text-sm">
              <strong>Shared from other website</strong>
            </div>
            <div className="text-xs">
              <IonText color="medium">
                on Twitter
                <IonIcon icon={icLink} mode="md" />
              </IonText>
            </div>
          </div>
        </div>

        <IonRow className="post-item-stats">
          <IonCol>
            <IonIcon icon={icMoodHappy} mode="ios" color="medium" />
            <IonIcon icon={icHeart} mode="ios" color="medium" />
            <IonIcon icon={icThumbDown} color="medium" />
            <IonText color="medium">{reactionCount}</IonText>
          </IonCol>
          <IonCol size="auto">
            <IonText color="medium">{commentCount} comments</IonText>
          </IonCol>
        </IonRow>
      </div>

      <IonRow className="post-item-footer ion-justify-content-between">
        <IonCol size="auto">
          <IonButton color="medium" fill="clear" size="small">
            <IonIcon slot="start" icon={icThumbUp} mode="ios" />
            <IonText>React</IonText>
          </IonButton>
        </IonCol>
        <IonCol size="auto">
          <IonButton color="medium" fill="clear" size="small" onClick={onCommentClick}>
            <IonIcon slot="start" icon={icMessage} mode="ios" />
            <IonText>Comment</IonText>
          </IonButton>
        </IonCol>
        <IonCol size="auto">
          <IonButton color="medium" fill="clear" size="small">
            <IonIcon slot="start" icon={icShare} mode="ios" />
            <IonText>Share</IonText>
          </IonButton>
        </IonCol>
      </IonRow>
    </div>
  );
};

export default PostItem;
