import './index.min.css';

import { Trans } from '@lingui/macro';
import { Button } from 'components/atoms/Button';
import { icArrowsVertical, Icon } from 'components/atoms/Icon';
import { Col, Grid, Row } from 'components/atoms/Layout/Grid';
import { Text } from 'components/atoms/Text/index';
import ContentCommentItem, {
  contentCommentGroup,
} from 'components/molecules/ContentCommentGroup/ContentCommentItem';
import { IdeaData_comments } from 'graphql/operation/idea/types/IdeaData';
import React from 'react';

interface ContentCommentGroup {
  comments: IdeaData_comments[];
}

/**
 * Component
 */
export const ContentCommentGroup = ({ comments }: ContentCommentGroup) => {
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
        {comments.map((comment, i) => (
          <div className="comment-thread" key={i}>
            <ContentCommentItem
              isReply={!!comment.parentId}
              badge={'Badge'}
              content={comment.content}
              username={comment.user?.name}
              repliesCount={0}
              avatar={comment.user?.cover}
              timestamp={comment.updatedAt}
              reactionCount={comment.reactions?.length}
            />
            <div className="replies-list">
              <Button fill="clear">
                <Trans id="label.show1MoreReply" />
              </Button>

              <ContentCommentItem
                isReply={!!comment.parentId}
                badge={'Badge'}
                content={comment.content}
                username={comment.user?.name}
                repliesCount={0}
                avatar={comment.user?.cover}
                timestamp={comment.updatedAt}
                reactionCount={comment.reactions?.length}
              />
            </div>
          </div>
        ))}
      </div>
    </Grid>
  );
};

export default ContentCommentGroup;
