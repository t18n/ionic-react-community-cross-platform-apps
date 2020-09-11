import { Trans } from '@lingui/macro';
import { Badge } from 'components/atoms/Badge';
import { Button } from 'components/atoms/Button';
import { Card, CardContent, CardHeader, CardTitle } from 'components/atoms/Card';
import { icDots, icMessage, Icon, icShare, icThumbUp, icUser } from 'components/atoms/Icon';
import { Item } from 'components/atoms/Item';
import { Link } from 'components/atoms/Layout/Link';
import { Avatar, Img } from 'components/atoms/Media';
import { OnlineStatus } from 'components/atoms/OnlineStatus';
import PostComments from 'components/organisms/PostComments';
import faker from 'faker';
import React from 'react';

import { Text } from '../../atoms/Text/index';

export type PostItemProps = {
  onClickDetail?: () => void;
  onClickProfile: () => void;
  reactionCount: number;
  reportCount: number;
  commentCount: number;
  summary: string;
  editTimestamp: string;
  avatar: string;
  type: string;
  firstName: string;
  cover: string;
  title: string;
};

export const postItems: PostItemProps[] = [...Array(14)].map(() => ({
  onClickDetail: () => console.log('clicked'),
  onClickProfile: () => console.log('clicked'),
  reactionCount: faker.random.number(),
  commentCount: faker.random.number(),
  reportCount: faker.random.number(),
  summary: faker.lorem.sentence(),
  editTimestamp: `${faker.date.past().getUTCDay()}d`,
  avatar: faker.image.avatar(),
  type: faker.random.word(),
  firstName: faker.name.firstName(),
  cover: faker.image.nature(),
  title: faker.random.words(),
}));

export const PostItem = ({
  onClickDetail,
  onClickProfile,
  reactionCount,
  commentCount,
  reportCount,
  summary,
  editTimestamp,
  avatar,
  type,
  firstName,
  cover,
  title,
}: PostItemProps) => {
  const onCommentClick = () => {
    if (onClickDetail) onClickDetail();
  };

  const handleGoToProfile = () => {
    onClickProfile();
  };

  return (
    <Card className="pa-s">
      <Item className="flex items-start mb-m" lines="none">
        <Item slot="start" className="flex" lines="none">
          <Avatar onClick={handleGoToProfile} className="mr-s bg-medium">
            <img src={avatar || icUser} alt="" />
            <OnlineStatus status="active" />
          </Avatar>
          <div className="flex flex-col items-start">
            <div className="flex">
              <Link href="/" className="mr-s">
                <strong>{firstName}</strong>
              </Link>
            </div>
            <div className="flex">
              <Text as="span" color="medium" type="subtitle-s">
                {editTimestamp} · <Trans id="label.edited" />
              </Text>
            </div>
          </div>
        </Item>
        <Item slot="end" lines="none">
          <Badge>{type}</Badge>
        </Item>
      </Item>

      <Item>
        <Img src={cover} />
      </Item>

      <CardHeader className="mt-m">
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="mt-s">{summary}</CardContent>

      <Item className="mt-m flex justify-start">
        <Item className="mr-m subtitle-s">
          <Text as="span" color="medium">
            {reactionCount} reactions
          </Text>
        </Item>
        <Item className="mr-m subtitle-s">
          <Text as="span" color="medium">
            {commentCount} comments
          </Text>
        </Item>
        <Item className="mr-m subtitle-s">
          <Text as="span" color="medium">
            {reportCount} reports
          </Text>
        </Item>
      </Item>

      <Item className="flex justify-between">
        <div>
          <Button color="medium" fill="clear" size="small" className="mr-s">
            <Icon slot="start" icon={icThumbUp} />
            <Text as="span" color="medium">
              <Trans id="label.react" />
            </Text>
          </Button>
          <Button
            color="medium"
            fill="clear"
            size="small"
            className="mr-s"
            onClick={onCommentClick}
          >
            <Icon slot="start" icon={icMessage} />
            <Text as="span" color="medium">
              <Trans id="label.comment" />
            </Text>
          </Button>
          <Button color="medium" fill="clear" size="small" className="mr-s">
            <Icon slot="start" icon={icShare} />
            <Text as="span" color="medium">
              <Trans id="label.share" />
            </Text>
          </Button>
        </div>
        <Button color="medium" fill="clear" size="small" slot="end">
          <Icon slot="start" icon={icDots} />
          <Text as="span" color="medium">
            <Trans id="label.more" />
          </Text>
        </Button>
      </Item>

      <Item>
        <PostComments />
      </Item>
    </Card>
  );
};

export default PostItem;
