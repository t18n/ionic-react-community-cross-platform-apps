import { IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react';
import { Trans } from '@lingui/macro';
import React, { useState } from 'react';

import { MediumTabComments } from './MediumTabComments';
import { MediumTabIdeas } from './MediumTabIdeas';
import { MediumTabRatings } from './MediumTabRatings';

enum MediumTabNames {
  IDEAS = 'ideas',
  COMMENTS = 'comments',
  RATINGS = 'ratings',
}

export const MediumTabs: React.FC = () => {
  const [segment, setSegment] = useState<MediumTabNames>(MediumTabNames.IDEAS);

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
      <MediumTabIdeas hide={segment !== MediumTabNames.IDEAS} />
      <MediumTabComments hide={segment !== MediumTabNames.COMMENTS} />
      <MediumTabRatings hide={segment !== MediumTabNames.RATINGS} />
    </div>
  );
};
