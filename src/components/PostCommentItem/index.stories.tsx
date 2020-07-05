import React from 'react';

import PostCommentItem, { postComments } from './';

export default {
  title: 'Post Comments',
  component: PostCommentItem,
};

export const Item = () =>
  postComments.map((postComment, index) => (
    <PostCommentItem
      key={index}
      isReply={postComment.isReply}
      badge={postComment.badge}
      content={postComment.content}
      username={postComment.username}
      repliesCount={postComment.repliesCount}
      avatar={postComment.avatar}
      timestamp={postComment.timestamp}
      reactionCount={postComment.reactionCount}
    />
  ));
