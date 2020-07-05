import { IonItem, IonItemGroup, IonList, IonListHeader } from '@ionic/react';
import React from 'react';

import { IdeaQuery_idea } from '../../graphql/operation/idea/types/IdeaQuery';
import { MediumTab, MediumTabProps } from './MediumTab';

export interface MediumTabIdeasProps extends MediumTabProps {
  ideas?: IdeaQuery_idea[];
  isLoading: boolean;
}

export const MediumTabIdeas = ({ hide, ideas, isLoading }: MediumTabIdeasProps) => {
  return (
    <MediumTab hide={hide}>
      <IonList>
        <IonListHeader>Ideas</IonListHeader>

        {isLoading && <div>Loading...</div>}

        {ideas.length > 0 ? (
          ideas.map((idea) => (
            <IonItemGroup className="idea-box" key={idea.content}>
              <IonItem>{idea.content}</IonItem>
            </IonItemGroup>
          ))
        ) : (
          <div>No ideas is available</div>
        )}
      </IonList>
    </MediumTab>
  );
};
