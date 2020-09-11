import './index.min.css';

import { t } from '@lingui/macro';
import { Chip } from 'components/atoms/Chip';
import { Col, Row } from 'components/atoms/Layout/Grid';
import { Page, PageContent } from 'components/atoms/Layout/Page';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import PostItem from 'components/molecules/PostItem';
import SkeletonPost from 'components/organisms/SkeletonPost';
import { UserContext } from 'context/User';
import { useMediumsQuery } from 'graphql/operation/medium/query';
import { useSearchBar } from 'hooks/useSearchbar';
import uniqBy from 'lodash/uniqBy';
import Tour from 'pages/Tour';
import React from 'react';

type HomeProps = {
  history: any;
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

  const availableTags = !MEDIUM_DATA
    ? null
    : uniqBy(mediaToShow.map(({ tags }) => tags).flat(), 'name');

  return !isAuthed ? (
    <Tour />
  ) : (
    <Page>
      <Breadcrumb title={t`page.title.explore`} />

      <PageContent>
        {error ? 'There are some errors' : null}

        {loading && <SkeletonPost />}
        {!loading && (
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
                <PostItem
                  key={medium.id}
                  type={medium.type}
                  title={medium.title}
                  onClickDetail={() => console.log('going to', medium.slug)}
                  onClickProfile={() => console.log('going to Profile', medium.slug)}
                  reactionCount={medium.reactions.length}
                  reportCount={medium.reports.length}
                  commentCount={medium.comments.length}
                  summary={medium.shortDescription}
                  editTimestamp={medium.updatedAt}
                  avatar={medium.users[0] && medium.users[0].cover}
                  firstName={medium.users[0] && medium.users[0].name}
                  cover={medium.cover}
                />
              ))}
            </Col>
          </Row>
        )}
      </PageContent>
    </Page>
  );
};
