import './index.min.css';

import { IonCol, IonRow } from '@ionic/react';
import SkeletonElement from 'components/molecules/SkeletonElement';
import React from 'react';

const SkeletonPost = () => {
  return (
    <div className="skeleton-layout">
      {[0, 1].map((i) => (
        <div className="skeleton-post" key={i}>
          <IonRow>
            <IonCol size="auto">
              <SkeletonElement height={'32px'} width={'32px'} radius={'50%'} />
            </IonCol>
            <IonCol>
              <SkeletonElement height={'6px'} width={'30%'} />
              <SkeletonElement height={'6px'} width={'67%'} />
              <SkeletonElement height={'6px'} width={'25%'} />
            </IonCol>
          </IonRow>
          <div className="pa-m">
            <SkeletonElement height={'10px'} />
            <SkeletonElement height={'10px'} />
            <SkeletonElement height={'10px'} />
            <SkeletonElement height={'10px'} />
            <SkeletonElement height={'10px'} width={'30%'} />
          </div>
          <SkeletonElement height={'200px'} />
          <IonRow className="ion-justify-content-between">
            <IonCol size="auto">
              <SkeletonElement height={'12px'} width={'60px'} />
            </IonCol>
            <IonCol size="auto">
              <SkeletonElement height={'12px'} width={'60px'} />
            </IonCol>
            <IonCol size="auto">
              <SkeletonElement height={'12px'} width={'60px'} />
            </IonCol>
          </IonRow>
        </div>
      ))}
    </div>
  );
};

export default SkeletonPost;
