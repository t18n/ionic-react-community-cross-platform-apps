import { useIonViewDidEnter } from '@ionic/react';
import { t } from '@lingui/macro';
import { Col, Grid, Row } from 'components/atoms/Layout/Grid';
import { Link } from 'components/atoms/Layout/Link';
import { Page, PageContent } from 'components/atoms/Layout/Page';
import { List, ListHeader } from 'components/atoms/List';
import { Spinner } from 'components/atoms/Loading';
import { Text } from 'components/atoms/Text';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import { useMediumsQuery } from 'graphql/operation/medium/query';
import React, { useState } from 'react';

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
    <Page>
      <Breadcrumb title={t`page.title.explore`} />

      <PageContent>
        {isError ? 'There are some errors' : null}
        {!state.isLoading ? (
          <List>
            <ListHeader className="mb-m">
              <Text as="div" type="title-m">
                Top Mediums
              </Text>
            </ListHeader>
            <Grid fixed={true} className="p-0">
              <Row className="ion-justify-content-start">
                {MEDIUM_data &&
                  MEDIUM_data.media.items.slice(0, 4).map(({ id, slug, title, cover }) => (
                    <Col key={id} className="p-0" size="12" sizeLg="4">
                      <Link href={`mediums/${slug}`}>{title}</Link>
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
      </PageContent>
    </Page>
  );
};
