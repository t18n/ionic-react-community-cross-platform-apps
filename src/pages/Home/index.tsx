import './index.min.css';

import { t } from '@lingui/macro';
import { Button } from 'components/atoms/Button';
import { icNote, Icon } from 'components/atoms/Icon';
import { Content } from 'components/atoms/Layout/Content';
import { Header } from 'components/atoms/Layout/Header';
import { Page } from 'components/atoms/Layout/Page';
import PostItem, { postItems } from 'components/molecules/PostItem';
import SearchSuggestions from 'components/organisms/SearchSuggestions';
import SkeletonPost from 'components/organisms/SkeletonPost';
import Topbar from 'components/organisms/Topbar';
import { useLoggedInUser } from 'graphql/operation/user/query';
import { camera, videocam } from 'ionicons/icons';
import Tour from 'pages/Tour';
import React, { useEffect, useState } from 'react';

import { Text } from '../../components/atoms/Text/index';

type HomeProps = {
  history: any;
};

export const Home = ({ history }: HomeProps) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { isAuthed } = useLoggedInUser();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  const handleOnFocus = () => {
    setIsSearchFocused(true);
  };

  const handleOnBlur = () => {
    setIsSearchFocused(false);
  };

  return !isAuthed ? (
    <Tour />
  ) : (
    <Page title={t`page.title.home`}>
      <Header>
        <Topbar onFocus={handleOnFocus} onBlur={handleOnBlur} />
      </Header>

      <Content className={!isSearchFocused ? 'ion-hide' : ''}>
        <div className="content-overlay">
          <SearchSuggestions />
        </div>
      </Content>

      {isLoading && (
        <Content className="bg-light">
          <SkeletonPost />
        </Content>
      )}

      {!isLoading && (
        <Content className={`bg-light${isSearchFocused ? ' ion-hide' : ''}`}>
          <div className="toolbar-post">
            <Button color="white" className="button-post post-input">
              <div className="button-inner-left">
                <Icon color="medium" icon={icNote} />
                <Text color="medium">Write a post</Text>
              </div>
            </Button>
            <Button color="white" className="button-post">
              <Icon color="medium" icon={videocam} />
            </Button>
            <Button color="white" className="button-post">
              <Icon color="medium" icon={camera} />
            </Button>
          </div>

          <div className="post-list">
            {postItems.map((post, i) => (
              <PostItem
                key={i}
                onClickDetail={post.onClickDetail}
                onClickProfile={post.onClickProfile}
                reactionCount={post.reactionCount}
                commentCount={post.commentCount}
                summary={post.summary}
                editTimestamp={post.editTimestamp}
                avatar={post.avatar}
                badge={post.badge}
                firstName={post.firstName}
                cover={post.cover}
              />
            ))}
          </div>
        </Content>
      )}
    </Page>
  );
};
