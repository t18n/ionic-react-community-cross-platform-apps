import './index.min.css';

import { t } from '@lingui/macro';
import { Col, Row } from 'components/atoms/Layout/Grid';
import { Page, PageContent } from 'components/atoms/Layout/Page';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import PostItem, { postItems } from 'components/molecules/PostItem';
import SkeletonPost from 'components/organisms/SkeletonPost';
import { useSearchBar } from 'hooks/useSearchbar';
import Tour from 'pages/Tour';
import React, { useEffect, useState } from 'react';

import { Chip } from '../../components/atoms/Chip/index';
import { UserContext } from '../../context/User';

type HomeProps = {
  history: any;
};

export const Home = ({ history }: HomeProps) => {
  const { isSearchFocused } = useSearchBar();
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthed } = UserContext.useContainer();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  return !isAuthed ? (
    <Tour />
  ) : (
    <Page>
      <Breadcrumb title={t`page.title.home`} />

      <PageContent>
        {isLoading && <SkeletonPost />}
        {!isLoading && (
          <Row className={`scroll-y px py ${isSearchFocused ? 'hide' : ''}`}>
            {/* Chips */}
            <Col size="12">
              <Chip outline className="mr-s" color="medium">
                Hello
              </Chip>
              <Chip outline className="mr-s" color="medium">
                Hello
              </Chip>
              <Chip outline className="mr-s" color="medium">
                Hello
              </Chip>
              <Chip outline className="mr-s" color="medium">
                Hello
              </Chip>
              <Chip outline className="mr-s" color="medium">
                Hello
              </Chip>
              <Chip outline className="mr-s" color="medium">
                Hello
              </Chip>
            </Col>

            <Col size="12">
              {postItems.map((post, i) => (
                <PostItem
                  key={i}
                  onClickDetail={post.onClickDetail}
                  onClickProfile={post.onClickProfile}
                  reactionCount={post.reactionCount}
                  reportCount={post.reportCount}
                  commentCount={post.commentCount}
                  summary={post.summary}
                  editTimestamp={post.editTimestamp}
                  avatar={post.avatar}
                  type={post.type}
                  firstName={post.firstName}
                  cover={post.cover}
                  title={post.title}
                  comments={post.comments}
                />
              ))}
            </Col>
          </Row>
        )}
      </PageContent>
    </Page>
  );
};
