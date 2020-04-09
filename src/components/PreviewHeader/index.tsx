import './styles/index.min.css';

import { IonButton, IonIcon } from '@ionic/react';
import { ellipsisVertical, play, shuffle } from 'ionicons/icons';
import React from 'react';

import { LazyImg } from '../LazyImg';
import mcl from './styles/index.pcss.json';

export const PreviewHeader = () => (
  <div
    className={mcl.previewHeader}
    style={{ backgroundImage: 'http://placeimg.com/640/360/any' }}
  >
    <div className={mcl.infoHeader} style={{ background: 'http://placeimg.com/640/360/any' }}>
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
