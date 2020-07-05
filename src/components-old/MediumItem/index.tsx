import './styles/index.min.css';

import { IonItem, IonLabel, IonNote, IonThumbnail } from '@ionic/react';
import React, { FC } from 'react';

import { LazyImg } from '../LazyImg';
import mcl from './styles/index.pcss.json';

interface MediumItemProps {
  title: string;
  cover?: string;
  author?: string;
  comments?: number;
  reactions?: number;
  onClick?: () => void;
}

export const MediumItem: FC<MediumItemProps> = ({
  title,
  author,
  comments,
  reactions,
  onClick,
  cover,
}) => {
  return (
    <IonItem className={mcl.mediumItem} onClick={onClick}>
      <IonThumbnail>
        <LazyImg lazySrc={cover} alt={title} />
      </IonThumbnail>
      <IonLabel>
        <h3>{title}</h3>
        <IonNote>
          <p>{author}</p>
        </IonNote>
      </IonLabel>
      <p className={mcl.rating} slot="end">
        {reactions}
      </p>
      <IonNote slot="end">{comments} comments</IonNote>
    </IonItem>
  );
};
