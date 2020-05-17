import { IonSegment, IonSegmentButton, IonTabs, IonToolbar } from '@ionic/react';
import { Trans } from '@lingui/macro';
import { calendar, informationCircle, map, personCircle } from 'ionicons/icons';
import React, { useState } from 'react';

export const MediumTabs: React.FC = () => {
  const [segment, setSegment] = useState<'all' | 'favorites'>('all');

  return (
    <IonToolbar>
      <IonSegment value={segment} onIonChange={(e) => setSegment(e.detail.value as any)}>
        <IonSegmentButton value="ideas">
          <Trans id="medium.tabs.ideas" />
        </IonSegmentButton>
        <IonSegmentButton value="comments">
          {' '}
          <Trans id="medium.tabs.comments" />
        </IonSegmentButton>
      </IonSegment>
    </IonToolbar>
  );
};
