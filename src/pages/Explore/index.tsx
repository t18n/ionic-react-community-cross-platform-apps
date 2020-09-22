import { t } from '@lingui/macro';
import { Chip } from 'components/atoms/Chip';
import { Col, Row } from 'components/atoms/Layout/Grid';
import { PageContent } from 'components/atoms/Layout/Page';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import PostItem from 'components/molecules/PostItem';
import SkeletonPost from 'components/organisms/SkeletonPost';
import { useMediumsQuery } from 'graphql/operation/medium/query';
import { History } from 'history';
import { useSearchBar } from 'hooks/useSearchbar';
import uniqBy from 'lodash/uniqBy';
import React from 'react';

type HomeProps = {
  history: History;
};

export const Explore = ({ history }: HomeProps) => {
  const { isSearchFocused } = useSearchBar();

  const { data: MEDIUM_DATA, loading, error } = useMediumsQuery({
    variables: {
      first: 20,
    },
  });

  const mediaToShow = !MEDIUM_DATA ? null : MEDIUM_DATA.media.items.slice(0, 20);

  const availableTags = !mediaToShow
    ? null
    : uniqBy(mediaToShow.map(({ tags }) => tags).flat(), 'name');

  return (
    <>
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
                <PostItem key={medium.id} {...medium} />
              ))}
            </Col>
          </Row>
        )}
      </PageContent>
    </>
  );
};
