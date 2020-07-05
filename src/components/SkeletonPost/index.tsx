import './index.scss';

import { IonCol, IonRow } from '@ionic/react';
import React from 'react';

import SkeletonElement from '../SkeletonElement';

const SkeletonPost = () => {
  return (
    <div className="skeleton-layout">
      {[0, 1].map((i) => (
        <div className="skeleton-post" key={i}>
          <IonRow>
            <IonCol size="auto" className="ion-padding-start">
              <SkeletonElement height={'32px'} width={'32px'} radius={'50%'} />
            </IonCol>
            <IonCol>
              <SkeletonElement height={'6px'} width={'30%'} />
              <SkeletonElement height={'6px'} width={'67%'} />
              <SkeletonElement height={'6px'} width={'25%'} />
            </IonCol>
          </IonRow>
          <div className="ion-padding">
            <SkeletonElement height={'10px'} />
            <SkeletonElement height={'10px'} />
            <SkeletonElement height={'10px'} />
            <SkeletonElement height={'10px'} />
            <SkeletonElement height={'10px'} width={'30%'} />
          </div>
          <SkeletonElement height={'200px'} />
          <IonRow className="ion-justify-content-between">
            <IonCol size="auto" className="ion-padding-start">
              <SkeletonElement height={'12px'} width={'60px'} />
            </IonCol>
            <IonCol size="auto">
              <SkeletonElement height={'12px'} width={'60px'} />
            </IonCol>
            <IonCol size="auto" className="ion-padding-end">
              <SkeletonElement height={'12px'} width={'60px'} />
            </IonCol>
          </IonRow>
        </div>
      ))}
    </div>
  );
};

export default SkeletonPost;
