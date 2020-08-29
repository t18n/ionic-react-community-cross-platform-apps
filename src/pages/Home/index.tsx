import './index.min.css';

import { t } from '@lingui/macro';
import { Content } from 'components/atoms/Layout/Content';
import { Page } from 'components/atoms/Layout/Page';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import PostItem, { postItems } from 'components/molecules/PostItem';
import SearchSuggestions from 'components/organisms/SearchSuggestions';
import SkeletonPost from 'components/organisms/SkeletonPost';
import { useLoggedInUser } from 'graphql/operation/user/query';
import { useSearchBar } from 'hooks/useSearchbar';
import Tour from 'pages/Tour';
import React, { useEffect, useState } from 'react';

type HomeProps = {
  history: any;
};

export const Home = ({ history }: HomeProps) => {
  const { isSearchFocused, onSearchCancel, onSearchChange, searchTerm } = useSearchBar();
  const [isLoading, setIsLoading] = useState(true);

  const { isAuthed } = useLoggedInUser();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  return !isAuthed ? (
    <Tour />
  ) : (
    <Page>
      <Breadcrumb
        title={t`page.title.home`}
        searchBar={{
          onSearchChange: onSearchChange,
          onSearchCancel: onSearchCancel,
        }}
      />

      <SearchSuggestions isFocused={isSearchFocused} searchTerm={searchTerm} />

      {isLoading && (
        <Content className="bg-light">
          <SkeletonPost />
        </Content>
      )}

      {!isLoading && (
        <Content className={`bg-light${isSearchFocused ? ' hide' : ''}`}>
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
