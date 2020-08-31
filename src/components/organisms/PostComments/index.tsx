import './index.min.css';

import { Trans } from '@lingui/macro';
import { Button } from 'components/atoms/Button';
import { icArrowsVertical, Icon } from 'components/atoms/Icon';
import { Col, Row } from 'components/atoms/Layout/Grid';
import { Text } from 'components/atoms/Text/index';
import PostCommentItem, { postComments } from 'components/molecules/PostCommentItem';
import React from 'react';

export const PostComments = () => {
  return (
    <div className="comments pa-m">
      <div className="mb-s">
        <Row className="p-0">
          <Col className="p-0">
            <div className="subtitle-large text-bold">
              <Trans id="label.comments" />
            </div>
          </Col>
          <Col className="p-0" size="auto">
            <div className="text-sm">
              <Text as="span" color="medium">
                <Trans id="label.button.sortByTop" />
                <Icon icon={icArrowsVertical} className="icon-sort" />
              </Text>
            </div>
          </Col>
        </Row>
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
              <Button fill="clear">Show 1 more reply</Button>

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
