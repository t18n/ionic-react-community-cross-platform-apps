import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonList,
  IonListHeader,
  IonRow,
  IonSpinner,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
} from '@ionic/react';
import { t, Trans } from '@lingui/macro';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components-old/Header';
import { Layout } from '../../components-old/Layout';
import { TagPreview } from '../../components-old/TagPreview';
import { useMediumsQuery } from '../../graphql/operation/medium/query';

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
    <Layout id="explore-page" title={<Trans id="page.title.explore" />}>
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
                  <h1>Top Mediums</h1>
                </IonListHeader>
                <IonRow className="ion-justify-content-start">
                  {MEDIUM_data &&
                    MEDIUM_data.mediums.items.slice(0, 4).map(({ id, slug, title, cover }) => (
                      <IonCol sizeLg="4" sizeXl="3" key={id} className="ion-no-padding">
                        <Link to={`mediums/${slug}`}>
                          <TagPreview title={title} imgSrc={cover} imgAlt={title} rating="4.5" />
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
    </Layout>
  );
};
