import { IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react';
import { Trans } from '@lingui/macro';
import React, { useState } from 'react';

import { useIdeasQuery } from '../../graphql/operation/idea/query';
import { MediumTabComments } from './MediumTabComments';
import { MediumTabIdeas } from './MediumTabIdeas';
import { MediumTabRatings } from './MediumTabRatings';

enum MediumTabNames {
  IDEAS = 'ideas',
  COMMENTS = 'comments',
  RATINGS = 'ratings',
}

interface MediumTabsProps {
  mediumSlug: string;
}

export const MediumTabs = ({ mediumSlug }: MediumTabsProps) => {
  const [segment, setSegment] = useState<MediumTabNames>(MediumTabNames.IDEAS);
  const { data, loading } = useIdeasQuery({
    variables: {
      data: {
        first: 40,
        mediumSlug,
      },
    },
  });

  return (
    <div>
      <IonToolbar>
        <IonSegment
          value={segment}
          onIonChange={(e) => setSegment(e.detail.value as MediumTabNames)}
        >
          <IonSegmentButton value={MediumTabNames.IDEAS}>
            <Trans id="medium.tabs.ideas" />
          </IonSegmentButton>
          <IonSegmentButton value={MediumTabNames.COMMENTS}>
            {' '}
            <Trans id="medium.tabs.comments" />
          </IonSegmentButton>
          <IonSegmentButton value={MediumTabNames.RATINGS}>
            {' '}
            <Trans id="medium.tabs.ratings" />
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
      <MediumTabIdeas
        hide={segment !== MediumTabNames.IDEAS}
        ideas={data ? data.ideas.items : []}
        isLoading={loading}
      />
      <MediumTabComments hide={segment !== MediumTabNames.COMMENTS} />
      <MediumTabRatings hide={segment !== MediumTabNames.RATINGS} />
    </div>
  );
};
