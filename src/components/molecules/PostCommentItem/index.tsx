import './index.min.css';

import { Trans } from '@lingui/macro';
import { Button } from 'components/atoms/Button';
import { icDots, icMessage, Icon, icShare, icThumbUp } from 'components/atoms/Icon';
import { Col, Row } from 'components/atoms/Layout/Grid';
import { Link } from 'components/atoms/Layout/Link';
import { Avatar } from 'components/atoms/Media';
import { Text } from 'components/atoms/Text';
import faker from 'faker';
import React from 'react';

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
    <Row>
      <Col size="auto" className="flex items-start">
        <Avatar className="small">
          <img src={avatar} alt="" />
        </Avatar>
      </Col>
      <Col className="flex items-start">
        <div className="ml-s">
          <div>
            <Row>
              <Col className="p-0">
                <div className="caption flex flex-col items-start">
                  <Link href="/" className="subtitle-large text-bold">
                    {username}
                  </Link>
                  <Text color="medium">{badge}</Text>
                </div>
              </Col>
              <Col size="auto" className="p-0">
                <div className="caption">
                  <Text color="medium">{timestamp}</Text>
                </div>
              </Col>
            </Row>
          </div>

          <p>{content}</p>

          {/* <div className="mt-m flex justify-start">
            <div className="mr-m subtitle-small color-medium">
              {reactionCount} <Trans id="label.reactions" />
            </div>
            <div className="mr-m subtitle-small color-medium">
              {repliesCount}{' '}
              {repliesCount > 1 ? <Trans id="label.replies" /> : <Trans id="label.reply" />}
            </div>
          </div> */}

          <div className="flex justify-between">
            <div>
              <Button color="medium" fill="clear" size="small" className="mr-s">
                <Icon slot="start" icon={icThumbUp} />
                <Text>react</Text>
              </Button>
              <Button
                color="medium"
                fill="clear"
                size="small"
                className="mr-s"
                onClick={() => console.log('ss')}
              >
                <Icon slot="start" icon={icMessage} />
                <Text>reply</Text>
              </Button>
              <Button color="medium" fill="clear" size="small" className="mr-s">
                <Icon slot="start" icon={icShare} />
                <Text>share</Text>
              </Button>
            </div>
            <Button color="medium" fill="clear" size="small" slot="end">
              <Icon slot="start" icon={icDots} />
              <Text>more</Text>
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default PostCommentItem;
