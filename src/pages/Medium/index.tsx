import './index.pcss';

import { useIonViewDidEnter } from '@ionic/react';
import { t, Trans } from '@lingui/macro';
import { Button } from 'components/atoms/Button';
import { Card } from 'components/atoms/Card';
import {
  icArrowUp,
  icBookmark,
  icEdit,
  icLanguage,
  icMessage,
  Icon,
  icShare,
  icStar,
} from 'components/atoms/Icon';
import { Row } from 'components/atoms/Layout/Grid';
import { Page, PageContent } from 'components/atoms/Layout/Page';
import { Spinner } from 'components/atoms/Loading';
import { Img } from 'components/atoms/Media';
import { Text } from 'components/atoms/Text';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import { useMediumQuery } from 'graphql/operation/medium/query';
import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

/**
 * Types
 */
interface MatchParams {
  slug: string;
}

interface MediumProps extends RouteComponentProps<MatchParams> {}

/**
 * Component
 */
const Medium = ({
  match: {
    params: { slug },
  },
}: MediumProps) => {
  const { data, loading } = useMediumQuery({
    variables: {
      slug: slug,
    },
  });

  // TODO: Calculate this on server side
  const commentsHasRating =
    !loading && data && data.medium.comments.filter((comment) => !!comment.rating);
  const mediumRating =
    commentsHasRating &&
    commentsHasRating.reduce((acc, comment) => acc + comment.rating, 0) / commentsHasRating.length;

  useIonViewDidEnter(() => {
    console.log(slug);
  });

  return (
    <Page className="job-detail-page">
      <Breadcrumb title={t`page.title.medium`} />

      <PageContent className="bg-light">
        {loading && <Spinner color="primary" />}
        {!loading && data && (
          <>
            {/* Title */}
            <Row>
              <Text as="h1" type="title-m" color="dark">
                {data.medium.title}
              </Text>
            </Row>

            {/* Metadata */}
            <Row className="flex flex-row justify-between items-center mt-m">
              <Text
                as="span"
                color="dark"
                type="subtitle-s"
                extraClasses="flex flex-row justify-between items-center"
              >
                <Icon icon={icLanguage} />
                {data.medium.language}
              </Text>
              <div>
                {data.medium.users ? (
                  data.medium.users.map((user, i) => (
                    <Link key={user.slug} to={`/profile/${user.slug}`}>
                      <Text as="span" type="subtitle-s" color="dark">
                        {i > 0 && ', '}
                        {user.name}
                      </Text>
                    </Link>
                  ))
                ) : (
                  <Text as="span" color="dark" type="subtitle-s">
                    <Trans id="label.unknown" />
                  </Text>
                )}
              </div>
            </Row>

            {/* Medium Cover */}
            <Row className="mt-m">
              <Img src={data.medium.cover} />
            </Row>

            {/* Medium Rating */}
            <Row className="flex flex-row justify-between items-center mt-m">
              <Button fill="clear" className="flex flex-row items-center">
                <Icon icon={icStar} color="warning" />
                <Text as="span" color="medium">
                  {mediumRating}
                </Text>
              </Button>

              <Button fill="clear" className="flex flex-row items-center">
                <Icon icon={icArrowUp} color="medium" />
                <Text as="span" color="medium">
                  {data.medium.votes || 0} votes
                </Text>
              </Button>
            </Row>

            {/* Description */}
            <Row className="flex flex-row justify-between items-center mt-m">
              <Text as="p" color="dark">
                {data.medium.shortDescription}
              </Text>
            </Row>

            {/* Engagements statistics */}
            <Row className="flex flex-row justify-between items-center mt-m">
              <Text as="span" color="medium">
                {data.medium.reactions.length} reactions
              </Text>
              <Text as="span" color="medium">
                {data.medium.comments.length} comments
              </Text>
              <Text as="span" color="medium">
                {data.medium.slipboxes.length} saves
              </Text>
            </Row>

            {/* Engagements */}
            <Row className="flex flex-row justify-between items-center mt-m">
              <Button fill="clear" className="flex flex-col items-center">
                <Icon icon={icShare} color="medium" />
                <Text as="span" color="medium">
                  share
                </Text>
              </Button>

              <Button fill="clear" className="flex flex-col items-center">
                <Icon icon={icBookmark} color="medium" />
                <Text as="span" color="medium">
                  save
                </Text>
              </Button>

              <Button fill="clear" className="flex flex-col items-center">
                <Icon icon={icEdit} color="medium" />
                <Text as="span" color="medium">
                  edit
                </Text>
              </Button>

              <Button fill="clear" className="flex flex-col items-center">
                <Icon icon={icArrowUp} color="medium" />
                <Text as="span" color="medium">
                  upvote
                </Text>
              </Button>

              <Button fill="clear" className="flex flex-col items-center">
                <Icon icon={icMessage} color="medium" />
                <Text as="span" color="medium">
                  comment
                </Text>
              </Button>
            </Row>

            {/* Ideas */}
            <Row className="flex flex-col justify-between items-center mt-l">
              <Text as="span" type="title-m" color="dark">
                {data.medium.ideas.length} ideas
              </Text>

              {data.medium.ideas.map((idea) => (
                <Card key={idea.slug} className="w-100p pa-m mt-s">
                  <Text as="h2" color="dark" type="subtitle-l">
                    {idea.user ? (
                      <Link to={`/profiles/${idea.user.slug}`}>
                        <Text as="span" type="subtitle-l" color="dark" fontWeight="text-bold">
                          {idea.user.name}
                        </Text>
                      </Link>
                    ) : (
                      <Text as="span" type="subtitle-l" color="dark" fontWeight="text-bold">
                        <Trans id="label.unknown" />
                      </Text>
                    )}{' '}
                    {idea.content}
                  </Text>
                  <Row>
                    <Link to={`/ideas/${idea.slug}`}>
                      <Text as="h2" color="primary" type="subtitle-s">
                        Read more
                      </Text>
                    </Link>
                  </Row>
                </Card>
              ))}
            </Row>
          </>
        )}
      </PageContent>
    </Page>
  );
};

export default Medium;
