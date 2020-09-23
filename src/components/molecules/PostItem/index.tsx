import { Trans } from '@lingui/macro';
import { Badge } from 'components/atoms/Badge';
import { Button } from 'components/atoms/Button';
import { Card, CardContent, CardHeader, CardTitle } from 'components/atoms/Card';
import { icDots, icMessage, Icon, icShare, icThumbUp } from 'components/atoms/Icon';
import { Item } from 'components/atoms/Item';
import { Link } from 'components/atoms/Layout/Link';
import { Img } from 'components/atoms/Media';
import PostComments from 'components/organisms/PostComments';
import { MediaQuery_media_items } from 'graphql/operation/medium/types/MediaQuery';
import React from 'react';
import { getRelativeTimeToNow } from 'utils/time';

import { Text } from '../../atoms/Text/index';

export type PostItemProps = MediaQuery_media_items;

export const PostItem = ({
  title,
  shortDescription,
  type,
  slug,
  cover,
  users,
  tags,
  ideas,
  comments,
  reactions,
  votes,
  updatedAt,
}: PostItemProps) => {
  const handleCardClick = () => console.log('hehe');

  return (
    <Card className="pa-s" onClick={handleCardClick}>
      <CardHeader className="mt-m">
        <Link key={slug} to={`/media/${slug}`}>
          <CardTitle>{title}</CardTitle>
        </Link>
      </CardHeader>

      <Item className="flex items-start mb-m" lines="none">
        <Item slot="start" className="flex" lines="none">
          <div className="flex flex-col items-start">
            <div className="flex">
              {users ? (
                users.map((user) => (
                  <Link key={user.slug} to={`/profile/${user.slug}`} extraClasses="mr-s">
                    <Text as="span" fontWeight="text-bold" color="medium" type="subtitle-s">
                      {user.name}
                    </Text>
                  </Link>
                ))
              ) : (
                <Text as="span" fontWeight="text-bold" color="medium" type="subtitle-s">
                  <Trans id="label.unknown" />
                </Text>
              )}
            </div>
            <div className="flex">
              <Text as="span" color="medium" type="subtitle-s">
                {getRelativeTimeToNow(updatedAt)} · <Trans id="label.edited" />
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

      <CardContent className="mt-s">{shortDescription}</CardContent>

      <Item className="mt-m flex justify-start">
        <Item className="mr-m subtitle-s">
          <Text as="span" color="medium">
            {ideas.length} ideas
          </Text>
        </Item>
        <Item className="mr-m subtitle-s">
          <Text as="span" color="medium">
            {reactions.length} reactions
          </Text>
        </Item>
        <Item className="mr-m subtitle-s">
          <Text as="span" color="medium">
            {comments.length} comments
          </Text>
        </Item>
        <Item className="mr-m subtitle-s">
          <Text as="span" color="medium">
            {votes.length} votes
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
            onClick={() => console.log('comment click')}
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
