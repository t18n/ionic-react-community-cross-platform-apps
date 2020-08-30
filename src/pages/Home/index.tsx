import './index.min.css';

import { t, Trans } from '@lingui/macro';
import { Badge } from 'components/atoms/Badge';
import { Button } from 'components/atoms/Button';
import { Card, CardContent } from 'components/atoms/Card';
import { Icon, icPoint } from 'components/atoms/Icon';
import { Item, Label } from 'components/atoms/Item';
import { Content } from 'components/atoms/Layout/Content';
import { Col, Row } from 'components/atoms/Layout/Grid';
import { Link } from 'components/atoms/Layout/Link';
import { Page } from 'components/atoms/Layout/Page';
import { List } from 'components/atoms/List';
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
    }, 1000);
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
        <Content className="px py">
          <SkeletonPost />
        </Content>
      )}

      {!isLoading && (
        <Content className={`px py ${isSearchFocused ? 'hide' : ''}`}>
          <Row>
            <Col>
              <Badge className="mr-s">Hello</Badge>
              <Badge className="mr-s">Hello</Badge>
              <Badge className="mr-s">Hello</Badge>
              <Badge className="mr-s">Hello</Badge>
              <Badge className="mr-s">Hello</Badge>
            </Col>
          </Row>
          <Row className="mt-m">
            <Col size="8">
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
                  badge={post.badge}
                  firstName={post.firstName}
                  cover={post.cover}
                  title={post.title}
                />
              ))}
            </Col>
            <Col size="4">
              <Card className="pa-m">
                <Item lines="none">
                  <Label className="flex items-center">
                    <Icon icon={icPoint} slot="start" />
                    <Trans id="label.recommendations" />
                  </Label>
                  <Button slot="end" fill="clear" expand="block">
                    <Trans id="label.seeAll" />
                  </Button>
                </Item>

                <CardContent>
                  <List>
                    <Item lines="none">
                      <Link href="/">Home</Link>
                    </Item>
                    <Item lines="none">
                      <Link href="/">Home</Link>
                    </Item>
                    <Item lines="none">
                      <Link href="/">Home</Link>
                    </Item>
                    <Item lines="none">
                      <Link href="/">Home</Link>
                    </Item>
                  </List>
                </CardContent>
              </Card>

              <Card className="pa-m">
                <Item lines="none">
                  <Label className="flex items-center">
                    <Icon icon={icPoint} slot="start" />
                    <Trans id="label.recommendations" />
                  </Label>
                  <Button slot="end" fill="clear" expand="block">
                    <Trans id="label.seeAll" />
                  </Button>
                </Item>

                <CardContent>
                  <List>
                    <Item lines="none">
                      <Link href="/">Home</Link>
                    </Item>
                    <Item lines="none">
                      <Link href="/">Home</Link>
                    </Item>
                    <Item lines="none">
                      <Link href="/">Home</Link>
                    </Item>
                    <Item lines="none">
                      <Link href="/">Home</Link>
                    </Item>
                  </List>
                </CardContent>
              </Card>
            </Col>
          </Row>
        </Content>
      )}
    </Page>
  );
};
