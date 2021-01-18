import './index.pcss';

import { t } from '@lingui/macro';
import { Row } from 'components/atoms/Layout/Grid';
import { Page, PageContent } from 'components/atoms/Layout/Page';
import { Spinner } from 'components/atoms/Loading';
import { Text } from 'components/atoms/Text';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import { ContentActionGroup } from 'components/molecules/ContentActionGroup';
import { ContentCommentGroup } from 'components/molecules/ContentCommentGroup';
import { ContentStatsGroup } from 'components/molecules/ContentStatsGroup';
import { useIdeaQuery } from 'graphql/operation/idea/query';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

/**
 * Types
 */
interface MatchParams {
  slug: string;
}

interface IdeaProps extends RouteComponentProps<MatchParams> {}

/**
 * Component
 */
export const Idea = ({
  match: {
    params: { slug },
  },
}: IdeaProps) => {
  const { data, loading } = useIdeaQuery({
    variables: {
      slug: slug,
    },
  });

  return (
    <Page>
      <Breadcrumb title={t`page.title.idea`} />

      <PageContent>
        {loading && <Spinner color="primary" />}
        {!loading && data && (
          <>
            <Row>
              <Text as="p" color="dark">
                {data.idea.content}
              </Text>
            </Row>
            <Row>
              <ContentStatsGroup
                leftContent={[
                  `${data.idea.slipboxes?.length} saves`,
                  `${data.idea.reactions?.length} reactions`,
                  `${data.idea.comments?.length} comments`,
                ]}
                rightContent={[`${data.idea.votes.length} votes`]}
              />

              <ContentActionGroup />
            </Row>
            <Row>
              <ContentCommentGroup comments={data.idea.comments} />
            </Row>
          </>
        )}
      </PageContent>
    </Page>
  );
};
