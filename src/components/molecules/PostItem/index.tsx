import { Trans } from '@lingui/macro';
import { Badge } from 'components/atoms/Badge';
import { Button } from 'components/atoms/Button';
import { Card, CardContent, CardHeader, CardTitle } from 'components/atoms/Card';
import { icDots, icMessage, Icon, icShare, icThumbUp } from 'components/atoms/Icon';
import { Link } from 'components/atoms/Layout/Link';
import { Item } from 'components/atoms/List';
import { Avatar, Img } from 'components/atoms/Media';
import { OnlineStatus } from 'components/atoms/OnlineStatus';
import PostCommentItem, {
  PostCommentItemProps,
  postComments,
} from 'components/molecules/PostCommentItem';
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
  comments: PostCommentItemProps[] | null;
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
  comments: postComments,
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

  const onSeeAll = () => {
    if (onClickDetail) onClickDetail();
  };

  const handleGoToProfile = () => {
    onClickProfile();
  };

  return (
    <Card className="pa-s">
      <Item lines="none" className="flex items-start mb-m">
        <Item slot="start" lines="none" className="flex">
          <Avatar onClick={handleGoToProfile} className="mr-s">
            <img src={avatar} alt="" />
            <OnlineStatus status="active" />
          </Avatar>
          <div className="flex flex-col items-start">
            <div className="flex">
              <Link href="/" className="mr-s">
                <strong>{firstName}</strong>
              </Link>{' '}
              <Text as="span" color="medium" type="subtitle-s">
                {type}
              </Text>
            </div>
            <div className="flex">
              <Text as="span" color="medium" type="subtitle-s">
                {editTimestamp} · <Trans id="label.edited" />
              </Text>
            </div>
          </div>
        </Item>
        <Item lines="none" slot="end">
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
        <Item lines="none" className="mr-m subtitle-small color-medium">
          {reactionCount} reactions
        </Item>
        <Item lines="none" className="mr-m subtitle-small color-medium">
          {commentCount} comments
        </Item>
        <Item lines="none" className="mr-m subtitle-small color-medium">
          {reportCount} reports
        </Item>
      </Item>

      <Item className="flex justify-between" lines="none">
        <div>
          <Button color="medium" fill="clear" size="small" className="mr-s">
            <Icon slot="start" icon={icThumbUp} />
            <Text as="span">react</Text>
          </Button>
          <Button
            color="medium"
            fill="clear"
            size="small"
            className="mr-s"
            onClick={onCommentClick}
          >
            <Icon slot="start" icon={icMessage} />
            <Text as="span">comment</Text>
          </Button>
          <Button color="medium" fill="clear" size="small" className="mr-s">
            <Icon slot="start" icon={icShare} />
            <Text as="span">share</Text>
          </Button>
        </div>
        <Button color="medium" fill="clear" size="small" slot="end">
          <Icon slot="start" icon={icDots} />
          <Text as="span">more</Text>
        </Button>
      </Item>

      <Item lines="none">
        <PostComments />
      </Item>
    </Card>
  );
};

export default PostItem;
