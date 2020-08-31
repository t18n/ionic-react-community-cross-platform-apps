import './index.min.css';

import { t, Trans } from '@lingui/macro';
import { Badge } from 'components/atoms/Badge';
import { Button } from 'components/atoms/Button';
import { Card, CardContent } from 'components/atoms/Card';
import { Icon, icPoint } from 'components/atoms/Icon';
import { Item, Label } from 'components/atoms/Item';
import { Content } from 'components/atoms/Layout/Content';
import { Col, Grid, Row } from 'components/atoms/Layout/Grid';
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

import { Chip } from '../../components/atoms/Chip/index';

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
          {/* Col 8 */}
          <div>
            <Grid className="flex justify-between">
              <Row className="col-1">
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

                <Col size="12" className="pl-m">
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

              {/* Col 4 */}
              <Row className="col-2">
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
              </Row>
            </Grid>
          </div>
        </Content>
      )}
    </Page>
  );
};
