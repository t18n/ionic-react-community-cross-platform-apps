import { IonItem, IonItemGroup, IonList, IonListHeader } from '@ionic/react';
import React, { FC } from 'react';

import { MediumTab, MediumTabProps } from './MediumTab';

type MediumTabRatingsProps = MediumTabProps;

export const MediumTabRatings: FC<MediumTabRatingsProps> = ({ hide }) => {
  console.log();
  return (
    <MediumTab hide={hide}>
      <IonList>
        <IonListHeader>Ratings</IonListHeader>

        <IonItemGroup className="idea-box">
          <IonItem>Rating content 1</IonItem>
        </IonItemGroup>

        <IonItemGroup className="idea-box">
          <IonItem>Rating content 2</IonItem>
        </IonItemGroup>

        <IonItemGroup className="idea-box">
          <IonItem>Rating content 3</IonItem>
        </IonItemGroup>
      </IonList>
    </MediumTab>
  );
};
