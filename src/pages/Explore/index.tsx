import { useIonViewDidEnter } from '@ionic/react';
import { t } from '@lingui/macro';
import { Content } from 'components/atoms/Layout/Content';
import { Col, Grid, Row } from 'components/atoms/Layout/Grid';
import { Page } from 'components/atoms/Layout/Page';
import { List, ListHeader } from 'components/atoms/List';
import { Spinner } from 'components/atoms/Loading';
import { useMediumsQuery } from 'graphql/operation/medium/query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Explore = () => {
  const [state, setState] = useState({
    isLoading: true,
    topTags: [],
    topDiscussion: [],
    topSearch: [],
  });
  const [isError] = useState<boolean>(false);

  const { data: MEDIUM_data } = useMediumsQuery({
    variables: {
      first: 5,
    },
  });

  useIonViewDidEnter(() => {
    setState({
      topTags: [],
      topDiscussion: [],
      topSearch: [],
      isLoading: false,
    });
  });

  return (
    <Page title={t`page.title.explore`}>
      <Content fullscreen={true}>
        {isError ? 'There are some errors' : null}
        {!state.isLoading ? (
          <List>
            <Grid fixed={true} className="p-0">
              <ListHeader>
                <h1>Top Mediums</h1>
              </ListHeader>
              <Row className="ion-justify-content-start">
                {MEDIUM_data &&
                  MEDIUM_data.media.items.slice(0, 4).map(({ id, slug, title, cover }) => (
                    <Col sizeLg="4" sizeXl="3" key={id} className="p-0">
                      <Link to={`mediums/${slug}`}>{title}</Link>
                    </Col>
                  ))}
              </Row>
            </Grid>
          </List>
        ) : (
          <div className="ion-text-center pa-m">
            <Spinner color="primary" />
          </div>
        )}
      </Content>
    </Page>
  );
};
