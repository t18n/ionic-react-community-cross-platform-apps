import {
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonRow,
  IonSpinner,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
} from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { TagPreview } from '../../components/TagPreview';

export const Explore = () => {
  const [state, setState] = useState({
    isLoading: true,
    topTags: [],
    topDiscussion: [],
    topSearch: [],
  });
  const [isError] = useState<boolean>(false);

  useIonViewDidEnter(() => {
    setState({
      topTags: [],
      topDiscussion: [],
      topSearch: [],
      isLoading: false,
    });
  });

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Explore</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense" className="ion-no-border">
          <IonToolbar className=" transparent">
            <IonTitle size="large">Browse</IonTitle>
          </IonToolbar>
        </IonHeader>
        {isError ? 'There are some errors' : null}
        {!state.isLoading ? (
          <>
            <IonList>
              <IonGrid fixed={true} className="ion-no-padding">
                <IonListHeader>
                  <h1>Top Tags</h1>
                </IonListHeader>
                <IonRow className="ion-justify-content-start">
                  {state.topTags.map(({ id, slug, name }) => (
                    <IonCol sizeLg="4" sizeXl="3" key={id} className="ion-no-padding">
                      <Link to={`tags/${slug}`}>
                        <TagPreview title={name} />
                      </Link>
                    </IonCol>
                  ))}
                </IonRow>
              </IonGrid>
            </IonList>
          </>
        ) : (
          <div className="ion-text-center ion-padding">
            <IonSpinner color="primary" />
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};
