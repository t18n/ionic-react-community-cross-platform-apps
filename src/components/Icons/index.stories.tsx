import {
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonItemDivider,
  IonRow,
  IonSearchbar,
} from '@ionic/react';
import React, { useState } from 'react';

import * as Icons from '.';

export default {
  title: 'Icons',
  component: Icons,
};

export const Default = () => {
  const [searchText, setSearchText] = useState('');

  const isSearchMatch = (str: string) => {
    if (searchText === '') return true;

    return str.search(searchText) >= 0;
  };

  return (
    <>
      <IonSearchbar
        value={searchText}
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        onIonChange={(e) => setSearchText(e.detail.value!)}
      ></IonSearchbar>

      <IonRow>
        <IonCol>
          <a href="https://tablericons.com/" target="_blank" rel="noopener noreferrer">
            <h4>Find icons</h4>
          </a>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonItemDivider>
          <IonCol>
            <b>Id</b>
          </IonCol>
          <IonCol>
            <b>Small</b>
          </IonCol>
          <IonCol>
            <b>Default</b>
          </IonCol>
          <IonCol>
            <b>Large</b>
          </IonCol>
        </IonItemDivider>
      </IonRow>

      {/* <IonRow> */}
      {Object.keys(Icons).map((id) => (
        <IonRow key={id} style={{ display: !isSearchMatch(id) && 'none' }}>
          <IonItemDivider>
            <IonCol>{id}</IonCol>
            <IonCol>
              <IonIcon icon={Icons[id]} />
            </IonCol>
            <IonCol>
              <IonIcon icon={Icons[id]} size="small" />
            </IonCol>
            <IonCol>
              <IonIcon icon={Icons[id]} size="large" />
            </IonCol>
          </IonItemDivider>
        </IonRow>
      ))}
    </>
  );
};
