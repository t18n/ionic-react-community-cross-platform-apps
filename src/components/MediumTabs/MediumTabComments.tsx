import { IonItem, IonItemGroup, IonList, IonListHeader } from '@ionic/react';
import React from 'react';

import { MediumTab, MediumTabProps } from './MediumTab';

type MediumTabCommentsProps = MediumTabProps;

export const MediumTabComments = ({ hide }: MediumTabCommentsProps) => {
  console.log();
  return (
    <MediumTab hide={hide}>
      <IonList>
        <IonListHeader>Comments</IonListHeader>

        <IonItemGroup className="idea-box">
          <IonItem>Comment 1</IonItem>
        </IonItemGroup>

        <IonItemGroup className="idea-box">
          <IonItem>Comment 2</IonItem>
        </IonItemGroup>

        <IonItemGroup className="idea-box">
          <IonItem>Comment 3</IonItem>
        </IonItemGroup>
      </IonList>
    </MediumTab>
  );
};
