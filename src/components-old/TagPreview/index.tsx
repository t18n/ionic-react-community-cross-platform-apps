import './styles/index.min.css';

import { IonCard, IonLabel, IonNote } from '@ionic/react';
import React from 'react';

import { LazyImg } from '../LazyImg';
import mcl from './styles/index.pcss.json';

export const TagPreview = ({ title, imgSrc, imgAlt, rating }) => {
  return (
    <div className={mcl.tagPreviewCard}>
      <IonCard>
        <LazyImg lazySrc={imgSrc} alt={imgAlt} />
      </IonCard>
      <IonLabel>
        <h3>
          <span>{title}</span>
        </h3>
        <IonNote>
          <span className={mcl.rating}>{rating}</span>
          <p>Data slot 4</p>
        </IonNote>
      </IonLabel>
    </div>
  );
};
