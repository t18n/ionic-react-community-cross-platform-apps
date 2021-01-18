import React from 'react';

import { ContentCommentGroup } from '.';
import ContentCommentItem, { contentCommentGroup } from './ContentCommentItem';

export default {
  title: 'Post Comments',
  component: ContentCommentGroup,
};

// export const Thread = () => <ContentCommentGroup />;

export const ContentCommentItemExample = () =>
  contentCommentGroup.map((postComment, index) => (
    <ContentCommentItem
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
