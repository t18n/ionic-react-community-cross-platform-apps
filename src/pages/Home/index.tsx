import './index.min.css';

import { t } from '@lingui/macro';
import { Chip } from 'components/atoms/Chip';
import { Col, Row } from 'components/atoms/Layout/Grid';
import { Link } from 'components/atoms/Layout/Link';
import { Page, PageContent } from 'components/atoms/Layout/Page';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import PostItem from 'components/molecules/PostItem';
import SkeletonPost from 'components/organisms/SkeletonPost';
import { UserContext } from 'context/User';
import { useMediumsQuery } from 'graphql/operation/medium/query';
import { History } from 'history';
import { useSearchBar } from 'hooks/useSearchbar';
import uniqBy from 'lodash/uniqBy';
import Tour from 'pages/Tour';
import React from 'react';

type HomeProps = {
  history: History;
};

export const Home = ({ history }: HomeProps) => {
  const { isSearchFocused } = useSearchBar();
  const { isAuthed } = UserContext.useContainer();

  const { data: MEDIUM_DATA, loading, error } = useMediumsQuery({
    variables: {
      first: 20,
    },
  });

  const mediaToShow = !MEDIUM_DATA ? null : MEDIUM_DATA.media.items.slice(0, 20);

  const availableTags = !mediaToShow
    ? null
    : uniqBy(mediaToShow.map(({ tags }) => tags).flat(), 'name');

  return !isAuthed ? (
    <Tour />
  ) : (
    <Page>
      <Breadcrumb title={t`page.title.explore`} />

      <PageContent>
        {error ? error.message : null}

        {loading && <SkeletonPost />}
        {!loading && mediaToShow && (
          <Row className={`scroll-y px py ${isSearchFocused ? 'hide' : ''}`}>
            {/* Chips */}
            <Col size="12">
              {availableTags &&
                availableTags.map((tag) => (
                  <Chip outline className="mr-s" color="medium" key={tag.name}>
                    {tag.name}
                  </Chip>
                ))}
            </Col>

            <Col size="12">
              {mediaToShow.map((medium) => (
                <Link key={medium.slug} to={`/medium/${medium.slug}`}>
                  <PostItem
                    key={medium.id}
                    type={medium.type}
                    title={medium.title}
                    onClickDetail={() => console.log('going to', medium.slug)}
                    onClickProfile={() => console.log('going to Profile', medium.slug)}
                    onCardClick={() => console.log('going to', medium.slug)}
                    voteCount={medium.votes.length}
                    reactionCount={medium.reactions.length}
                    commentCount={medium.comments.length}
                    summary={medium.shortDescription}
                    editTimestamp={medium.updatedAt}
                    avatar={medium.users[0] && medium.users[0].cover}
                    firstName={medium.users[0] && medium.users[0].name}
                    cover={medium.cover}
                  />
                </Link>
              ))}
            </Col>
          </Row>
        )}
      </PageContent>
    </Page>
  );
};
