import { IonContent, IonSpinner, useIonViewDidEnter } from '@ionic/react';
import { Trans } from '@lingui/macro';
import React from 'react';

import { Layout } from '../../components/Layout';
import { MediumBrief } from '../../components/MediumBrief';
import { MediumTabs } from '../../components/MediumTabs';
import { useMediumQuery } from '../../graphql/operation/medium/query';

export const Medium = ({
  match: {
    params: { slug },
  },
}) => {
  const { data, loading } = useMediumQuery({
    variables: {
      slug: slug,
    },
  });

  useIonViewDidEnter(() => {
    console.log(slug);
  });

  return (
    <Layout id="medium-page" title={<Trans id="page.title.medium" />}>
      <IonContent fullscreen={true}>
        {loading ? (
          <div className="ion-text-center ion-padding">
            <IonSpinner color="primary" />
          </div>
        ) : (
          data && (
            <>
              <MediumBrief medium={data.medium} />
              <MediumTabs />
            </>
          )
        )}
        {/* <IonList>
          {loading ? (
            <div className="ion-text-center ion-padding">
              <IonSpinner color="primary" />
            </div>
          ) : (
            data &&
            data.mediums.items.map(({ id, slug, title, cover, users, comments, reactions }) => (
              <MediumItem
                key={id}
                cover={cover}
                title={title}
                author={users[0]?.name}
                comments={comments?.length}
                reactions={reactions?.length}
                onClick={() => console.log('tag clicked', slug)}
              />
            ))
          )}
        </IonList> */}
      </IonContent>
    </Layout>
  );
};
