import './styles/index.min.css';

import { IonCard, IonLabel, IonNote } from '@ionic/react';
import React from 'react';

import { LazyImg } from '../LazyImg';
import mcl from './styles/index.pcss.json';

export const TagPreview = ({ title }) => {
  return (
    <div className={mcl.tagPreviewCard}>
      <IonCard>
        <LazyImg lazySrc="http://placeimg.com/640/360/any" alt="album art" />
      </IonCard>
      <IonLabel>
        <h3>
          <span>{title}</span>
          Dataslot 2<span className={mcl.rating}> Dataslot 3 </span>
        </h3>
        <IonNote>
          <p>Data slot 4</p>
        </IonNote>
      </IonLabel>
    </div>
  );
};
