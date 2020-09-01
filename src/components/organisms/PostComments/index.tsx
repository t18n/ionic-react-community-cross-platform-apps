import './index.min.css';

import { Trans } from '@lingui/macro';
import { Button } from 'components/atoms/Button';
import { icArrowsVertical, Icon } from 'components/atoms/Icon';
import { Col, Grid, Row } from 'components/atoms/Layout/Grid';
import { Text } from 'components/atoms/Text/index';
import PostCommentItem, { postComments } from 'components/molecules/PostCommentItem';
import React from 'react';

export const PostComments = () => {
  return (
    <div className="comments mt-s w-100p">
      <Grid className="mb-s">
        <Row className="p-0">
          <Col className="p-0 flex justify-start" size="6">
            <Text as="span" type="subtitle-l" fontWeight="text-bold">
              <Trans id="label.comments" />
            </Text>
          </Col>
          <Col className="p-0 flex justify-end" size="6">
            <Text as="small" color="medium">
              <Trans id="label.button.sortByTop" />
              <Icon icon={icArrowsVertical} className="icon-sort" />
            </Text>
          </Col>
        </Row>
      </Grid>

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
              <Button fill="clear">
                <Trans id="label.show1MoreReply" />
              </Button>

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
