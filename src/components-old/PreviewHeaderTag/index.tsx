import './styles/index.min.css';

import { IonButton, IonIcon } from '@ionic/react';
import { ellipsisVertical, play, shuffle } from 'ionicons/icons';
import React, { FC } from 'react';

import { LazyImg } from '../LazyImg';
import mcl from './styles/index.pcss.json';

export const PreviewHeaderTag: FC = () => {
  return (
    <div className={mcl.previewHeader}>
      <div className={mcl.infoHeader}>
        <div className={mcl.tagInfo}>
          <LazyImg
            className={mcl.headerTag}
            lazySrc="http://placeimg.com/640/360/any"
            alt="Placeholder"
          />
          <div className={mcl.tagDetail}>
            <h3>Name</h3>
            <p>Data slot 1</p>
            <p>Data slot 2</p>
            <p>Data slot 3</p>
            <IonButton onClick={() => console.log('start clicked')}>
              <IonIcon slot="start" icon={play} />
              Play
            </IonButton>
            <IonButton onClick={() => console.log('shuffle clicked')}>
              <IonIcon icon={shuffle} slot="start" />
              Shuffle
            </IonButton>
            <IonButton>
              <IonIcon icon={ellipsisVertical} slot="icon-only" />
            </IonButton>
          </div>
        </div>
      </div>
    </div>
  );
};
