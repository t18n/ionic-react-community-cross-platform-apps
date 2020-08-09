import './index.min.css';

import { IonCol, IonIcon, IonRow, IonText } from '@ionic/react';
import PostCommentItem, { postComments } from 'components/molecules/PostCommentItem';
import { code } from 'ionicons/icons';
import React from 'react';

export const PostComments = () => {
  return (
    <div className="post-comments">
      <div className="panel-title">
        <IonRow className="ion-no-padding">
          <IonCol className="ion-no-padding">Comments</IonCol>
          <IonCol className="ion-no-padding" size="auto">
            <div className="text-sm">
              <IonText color="medium">
                Sort by{' '}
                <strong>
                  Top <IonIcon icon={code} className="icon-sort" />
                </strong>
              </IonText>
            </div>
          </IonCol>
        </IonRow>
      </div>

      <div className="comments-list">
        {postComments.map((postComment, i) => (
          <div className="comment-thread" key={i}>
            <PostCommentItem
              isReply={postComment.isReply}
              badge={postComment.badge}
              content={postComment.content}
              username={postComment.username}
              repliesCount={postComment.repliesCount}
              avatar={postComment.avatar}
              timestamp={postComment.timestamp}
              reactionCount={postComment.reactionCount}
            />
            <div className="replies-list">
              <div className="button-show-more text-xs">
                <strong>Show 1 more reply</strong>
              </div>
              <PostCommentItem
                isReply={postComment.isReply}
                badge={postComment.badge}
                content={postComment.content}
                username={postComment.username}
                repliesCount={postComment.repliesCount}
                avatar={postComment.avatar}
                timestamp={postComment.timestamp}
                reactionCount={postComment.reactionCount}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostComments;
