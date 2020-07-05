import { IonCol, IonRow } from '@ionic/react';
import React from 'react';

import { PostItem, postItems } from './index';

export default {
  title: 'PostItem',
  component: PostItem,
};

export const Default = () => (
  <IonRow>
    {postItems.map((post, i) => (
      <IonCol key={i} size="4">
        <PostItem
          onClickDetail={post.onClickDetail}
          onClickProfile={post.onClickProfile}
          reactionCount={post.reactionCount}
          commentCount={post.commentCount}
          summary={post.summary}
          editTimestamp={post.editTimestamp}
          avatar={post.avatar}
          badge={post.badge}
          firstName={post.firstName}
          cover={post.cover}
        />
      </IonCol>
    ))}
  </IonRow>
);
