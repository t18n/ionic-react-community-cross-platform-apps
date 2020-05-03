import './styles/index.min.css';

import { IonButton, IonIcon } from '@ionic/react';
import { albumsOutline } from 'ionicons/icons';
import React, { FC } from 'react';

import { MediumsQuery_mediums } from '../../graphql/operation/medium/types/MediumsQuery';
import { LazyImg } from '../LazyImg';
import mcl from './styles/index.pcss.json';

interface PreviewHeaderProps {
  medium: MediumsQuery_mediums;
}

export const PreviewHeader: FC<PreviewHeaderProps> = ({ medium }) => {
  const { title, cover, users, comments, reactions } = medium;

  return (
    <div className={mcl.previewHeader}>
      <div className={mcl.infoHeader}>
        <div className={mcl.mediumInfo}>
          <LazyImg className={mcl.headerMedium} lazySrc={cover} alt={title} />
          <div className={mcl.mediumDetail}>
            <div>
              <h3>Name</h3>
              <p>Data slot 1</p>
              <p>Data slot 2</p>
              <p>Data slot 3</p>
            </div>
            <div>
              <IonButton color="secondary" onClick={() => console.log('save to slipbox clicked')}>
                <IonIcon slot="start" icon={albumsOutline} />
                Save to Slipbox
              </IonButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
