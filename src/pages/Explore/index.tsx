import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonList,
  IonListHeader,
  IonPage,
  IonRow,
  IonSpinner,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
} from '@ionic/react';
import { useMediumsQuery } from 'graphql/operation/medium/query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Explore = () => {
  const [state, setState] = useState({
    isLoading: true,
    topTags: [],
    topDiscussion: [],
    topSearch: [],
  });
  const [isError] = useState<boolean>(false);

  const { data: MEDIUM_data } = useMediumsQuery({
    variables: {
      first: 5,
    },
  });

  useEffect(() => console.log('MEDIUM_data', MEDIUM_data), [MEDIUM_data]);

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
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense" className="border-0">
          <IonToolbar className=" transparent">
            <IonTitle size="large">Browse</IonTitle>
          </IonToolbar>
        </IonHeader>
        {isError ? 'There are some errors' : null}
        {!state.isLoading ? (
          <>
            <IonList>
              <IonGrid fixed={true} className="p-0">
                <IonListHeader>
                  <h1>Top Mediums</h1>
                </IonListHeader>
                <IonRow className="ion-justify-content-start">
                  {MEDIUM_data &&
                    MEDIUM_data.mediums.items.slice(0, 4).map(({ id, slug, title, cover }) => (
                      <IonCol sizeLg="4" sizeXl="3" key={id} className="p-0">
                        <Link to={`mediums/${slug}`}>{title}</Link>
                      </IonCol>
                    ))}
                </IonRow>
              </IonGrid>
            </IonList>
          </>
        ) : (
          <div className="ion-text-center p-all">
            <IonSpinner color="primary" />
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};
