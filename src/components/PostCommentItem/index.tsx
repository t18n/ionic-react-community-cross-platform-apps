import './index.min.css';

import { IonAvatar, IonButton, IonCol, IonIcon, IonRow, IonText } from '@ionic/react';
import faker from 'faker';
import React from 'react';

import { icArrowsMaximize, icArrowsMinimize, icMessages, icThumbUp } from '../Icons';

export interface PostCommentItemProps {
  isReply?: boolean;
  avatar: string;
  timestamp: string;
  badge: string;
  content: string;
  username: string;
  repliesCount: number;
  reactionCount: number;
}

export const postComments: PostCommentItemProps[] = [
  {
    isReply: true,
    avatar: faker.image.avatar(),
    timestamp: `${faker.date.past().getUTCDay()}d`,
    badge: faker.name.jobTitle(),
    content: faker.lorem.sentences(),
    username: faker.internet.userName(),
    repliesCount: faker.random.number(),
    reactionCount: faker.random.number(),
  },
];

const PostCommentItem = ({
  isReply,
  avatar,
  timestamp,
  badge,
  content,
  username,
  repliesCount,
  reactionCount,
}: PostCommentItemProps) => {
  return (
    <div className="post-comment-item">
      <IonRow>
        <IonCol size="auto">
          <IonAvatar className={isReply ? 'thumbnail-tiny' : 'thumbnail-small'}>
            <img src={avatar} alt="" />
          </IonAvatar>
        </IonCol>
        <IonCol>
          <div className="comment-main">
            <div className="comment-body">
              <IonRow>
                <IonCol className="ion-no-padding">
                  <div className="text-sm">
                    <strong>{username}</strong>
                  </div>
                </IonCol>
                <IonCol size="auto" className="ion-no-padding">
                  <div className="text-sm">
                    <IonText color="medium">{timestamp}</IonText>
                    <IonButton className="button-options" fill="clear" color="medium" size="small">
                      <IonIcon icon={icArrowsMaximize || icArrowsMinimize} mode="ios" />
                    </IonButton>
                  </div>
                </IonCol>
              </IonRow>
              <div className="text-xs">
                <IonText color="medium">{badge}</IonText>
              </div>
              <div className="comment-text text-sm">{content}</div>
            </div>

            <div className="comment-footer">
              <IonRow>
                <IonCol size="auto">
                  <IonButton fill="clear" color="medium" size="small">
                    <IonIcon slot="icon-only" icon={icThumbUp} size="small" />
                  </IonButton>
                  <span> · </span>
                  {reactionCount > 0 && (
                    <span className="text-xs">
                      <IonText color="medium">
                        {reactionCount > 1
                          ? `${reactionCount} reactions`
                          : `${reactionCount} reaction`}
                      </IonText>
                    </span>
                  )}
                </IonCol>
                <IonCol size="auto">
                  <div className="vertical-divider"></div>
                </IonCol>
                <IonCol size="auto">
                  <IonButton fill="clear" color="medium" size="small">
                    <IonIcon slot="icon-only" icon={icMessages} size="small" />
                  </IonButton>
                  {repliesCount > 0 && (
                    <span className="text-xs">
                      <IonText color="medium">
                        {repliesCount > 1 ? `${repliesCount} replies` : `${repliesCount} reply`}
                      </IonText>
                    </span>
                  )}
                </IonCol>
              </IonRow>
            </div>
          </div>
        </IonCol>
      </IonRow>
    </div>
  );
};

export default PostCommentItem;
