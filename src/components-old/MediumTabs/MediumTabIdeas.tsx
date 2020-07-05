import { IonItem, IonItemGroup, IonList, IonListHeader } from '@ionic/react';
import React, { FC } from 'react';

import { MediumTab, MediumTabProps } from './MediumTab';

type MediumTabIdeasProps = MediumTabProps;

export const MediumTabIdeas: FC<MediumTabIdeasProps> = ({ hide }) => {
  console.log();
  return (
    <MediumTab hide={hide}>
      <IonList>
        <IonListHeader>Ideas</IonListHeader>

        <IonItemGroup className="idea-box">
          <IonItem>Idea title 1</IonItem>
        </IonItemGroup>

        <IonItemGroup className="idea-box">
          <IonItem>Idea title 2</IonItem>
        </IonItemGroup>

        <IonItemGroup className="idea-box">
          <IonItem>Idea title 3</IonItem>
        </IonItemGroup>
      </IonList>
    </MediumTab>
  );
};
