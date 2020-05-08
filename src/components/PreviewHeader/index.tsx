import './styles/index.min.css';

import { IonButton, IonIcon } from '@ionic/react';
import { albumsOutline, cartOutline } from 'ionicons/icons';
import React, { FC } from 'react';

import { MediumsQuery_mediums } from '../../graphql/operation/medium/types/MediumsQuery';
import { LazyImg } from '../LazyImg';
import mcl from './styles/index.pcss.json';

interface PreviewHeaderProps {
  medium: MediumsQuery_mediums;
}

export const PreviewHeader: FC<PreviewHeaderProps> = ({ medium }) => {
  const {
    title,
    cover,
    shortDescription,
    publishedDate,
    isbn,
    users,
    comments,
    reactions,
  } = medium;

  return (
    <div className={mcl.previewHeader}>
      <div className={mcl.infoHeader}>
        <div className={mcl.mediumInfo}>
          <LazyImg className={mcl.headerMedium} lazySrc={cover} alt={title} />
          <div className={mcl.mediumDetail}>
            <div>
              <h3>{title}</h3>
              <p>{shortDescription}</p>
              <p>{publishedDate}</p>
              <p>{isbn}</p>
            </div>
            <div>
              <IonButton color="secondary" onClick={() => console.log('save to slipbox clicked')}>
                <IonIcon slot="start" icon={albumsOutline} />
                Save
              </IonButton>
              <IonButton color="secondary" onClick={() => console.log('buy clicked')}>
                <IonIcon slot="start" icon={cartOutline} />
                Buy
              </IonButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
