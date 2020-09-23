import './index.min.css';

import { Trans } from '@lingui/macro';
import { Button } from 'components/atoms/Button';
import { icArrowsVertical, Icon } from 'components/atoms/Icon';
import { Col, Grid, Row } from 'components/atoms/Layout/Grid';
import { Text } from 'components/atoms/Text/index';
import ContentCommentItem, {
  contentCommentGroup,
} from 'components/molecules/ContentCommentGroup/ContentCommentItem';
import React from 'react';

/**
 * Component
 */
export const ContentCommentGroup = () => {
  return (
    <Grid className="comments mt-s p-0">
      <Row className="p-0">
        <Col className="p-0 flex justify-start" size="6">
          <Text as="span" color="dark" type="subtitle-l" fontWeight="text-bold">
            <Trans id="label.comments" />
          </Text>
        </Col>
        <Col className="p-0 flex justify-end" size="6">
          <Text as="span" type="subtitle-s" color="dark" extraClasses="flex items-center">
            <Trans id="label.button.sortByTop" />{' '}
            <Button fill="clear">
              <Icon icon={icArrowsVertical} />
            </Button>
          </Text>
        </Col>
      </Row>

      <div className="comments-list">
        {contentCommentGroup.map((postComment, i) => (
          <div className="comment-thread" key={i}>
            <ContentCommentItem
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

              <ContentCommentItem
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
    </Grid>
  );
};

export default ContentCommentGroup;
