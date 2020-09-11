import { IonCol, IonRow } from '@ionic/react';
import React from 'react';

import { PostItem, postItems } from './index';

export default {
  title: 'Molecules',
  component: PostItem,
};

export const PostItemExample = () => (
  <IonRow>
    {postItems.map((post, i) => (
      <IonCol key={i} size="4">
        <PostItem
          onClickDetail={post.onClickDetail}
          onClickProfile={post.onClickProfile}
          reportCount={post.reportCount}
          reactionCount={post.reactionCount}
          commentCount={post.commentCount}
          summary={post.summary}
          editTimestamp={post.editTimestamp}
          avatar={post.avatar}
          type={post.type}
          firstName={post.firstName}
          cover={post.cover}
          title={post.title}
        />
      </IonCol>
    ))}
  </IonRow>
);
