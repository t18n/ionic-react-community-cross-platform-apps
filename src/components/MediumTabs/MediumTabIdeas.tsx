import { IonItem, IonItemGroup, IonList, IonListHeader } from '@ionic/react';
import React from 'react';

import { IdeasQuery } from '../../graphql/operation/idea/types/IdeasQuery';
import { MediumTab, MediumTabProps } from './MediumTab';

export interface MediumTabIdeasProps extends MediumTabProps, IdeasQuery {}

export const MediumTabIdeas = ({ hide, ideas }: MediumTabIdeasProps) => {
  return (
    <MediumTab hide={hide}>
      <IonList>
        <IonListHeader>Ideas</IonListHeader>

        {ideas &&
          ideas.items.map((idea) => (
            <IonItemGroup className="idea-box" key={idea.content}>
              <IonItem>{idea.content}</IonItem>
            </IonItemGroup>
          ))}
      </IonList>
    </MediumTab>
  );
};
