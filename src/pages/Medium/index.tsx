import './index.pcss';

import {
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSpinner,
  IonText,
  IonThumbnail,
  IonToggle,
  useIonViewDidEnter,
} from '@ionic/react';
import { t } from '@lingui/macro';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import SearchSuggestions from 'components/organisms/SearchSuggestions';
import faker from 'faker';
import { useMediumQuery } from 'graphql/operation/medium/query';
import { useSearchBar } from 'hooks/useSearchbar';
import { add, checkmarkCircle, checkmarkCircleOutline, open } from 'ionicons/icons';
import React from 'react';

interface MediumProps {
  match: any;
}

const Medium = ({
  match: {
    params: { slug },
  },
}: MediumProps) => {
  const { isSearchFocused, onSearchCancel, onSearchChange, searchTerm } = useSearchBar();

  const { data, loading } = useMediumQuery({
    variables: {
      slug: slug,
    },
  });

  useIonViewDidEnter(() => {
    console.log(slug);
  });

  return (
    <IonPage className="job-detail-page">
      <Breadcrumb
        title={t`page.title.medium`}
        searchBar={{
          onSearchChange: onSearchChange,
          onSearchCancel: onSearchCancel,
        }}
      />

      <SearchSuggestions isFocused={isSearchFocused} searchTerm={searchTerm} />

      <IonContent className="bg-light">
        {loading ? (
          <div className="ion-text-center pa-m">
            <IonSpinner color="primary" />
          </div>
        ) : (
          data && (
            <>
              <div className="panel">
                <div
                  className="cover-background"
                  style={{ backgroundImage: `url(${data.medium.cover})` }}
                ></div>

                <div className="panel-body">
                  <div className="profile-summary">
                    <IonThumbnail className="profile-logo">
                      <img src={faker.image.avatar()} alt="" />
                    </IonThumbnail>
                    <div className="profile-name">{data.medium.title}</div>
                    <div className="m-b-sm">
                      <strong>{data.medium.type}</strong>
                    </div>
                    <div>
                      <div className="text-sm">{faker.address.city()}</div>
                      <div className="text-sm">
                        <IonText color="medium">{faker.random.number()} applicants</IonText>
                      </div>
                    </div>
                  </div>

                  <IonRow>
                    <IonCol className="p-0">
                      <IonButton expand="block" fill="outline" color="primary" size="small">
                        Save
                      </IonButton>
                    </IonCol>
                    <IonCol className="p-0">
                      <IonButton expand="block" color="primary" size="small">
                        Apply
                        <IonIcon icon={open} />
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </div>
              </div>

              <div className="panel">
                <div className="panel-header">Job description</div>
                <div className="panel-body no-padding-top">
                  <div className="text-sm">{faker.lorem.paragraph()}</div>
                </div>
                <div className="panel-footer">
                  <IonButton expand="block" fill="clear" color="primary" size="small">
                    See expand
                  </IonButton>
                </div>
              </div>

              <div className="panel">
                <div className="panel-header">
                  <div>How you match</div>
                  <IonText color="medium">
                    <div className="text-xs">Criteria provided by job poster</div>
                  </IonText>
                </div>
                <div className="panel-body no-padding-top">
                  <IonRow className="items-center">
                    <IonCol size="auto">
                      <IonIcon icon={checkmarkCircle} color="primary" size="small" />
                    </IonCol>
                    <IonCol>
                      <div className="text-sm">
                        <strong>Skills </strong>
                        <IonText color="medium">
                          <span className="text-xs">6 out of 7</span>
                        </IonText>
                      </div>
                    </IonCol>
                  </IonRow>
                  <IonRow className="items-center">
                    <IonCol size="auto">
                      <IonIcon icon={checkmarkCircle} color="primary" size="small" />
                    </IonCol>
                    <IonCol>
                      <div className="text-sm">
                        <strong>Level of education </strong>
                        <IonText color="medium">
                          <span className="text-xs">Bachelor&apos;s Degree</span>
                        </IonText>
                      </div>
                    </IonCol>
                  </IonRow>
                </div>
                <div className="panel-footer">
                  <IonButton expand="block" fill="clear" color="primary" size="small">
                    More details
                  </IonButton>
                </div>
              </div>

              <div className="panel">
                <IonItem lines="none">
                  <IonLabel>
                    <div>
                      <IonIcon
                        className="icon-align-middle"
                        icon={checkmarkCircleOutline}
                        color="success"
                        size="small"
                      />
                      This job alert is ON
                    </div>
                    <IonText color="medium">
                      <div className="text-xs">Javascript Developer, Austin, Texas Area</div>
                    </IonText>
                  </IonLabel>
                  <IonToggle checked></IonToggle>
                </IonItem>
              </div>

              <div className="panel">
                <div className="panel-header">Learn expand about Career Interest</div>
                <div className="panel-body">
                  <IonRow className="items-center">
                    <IonCol size="auto">
                      <IonThumbnail className="avatar">
                        <img src={faker.image.avatar()} alt="" />
                      </IonThumbnail>
                    </IonCol>
                    <IonCol>
                      <div>
                        <strong>Career Interest</strong>
                      </div>
                      <IonText color="medium">
                        <div className="text-sm">54,710 followers</div>
                      </IonText>
                    </IonCol>
                    <IonCol className="p-0" size="auto">
                      <IonButton
                        fill="clear"
                        className="button-no-padding"
                        color="primary"
                        size="small"
                      >
                        <IonIcon icon={add} />
                        Follow
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </div>
              </div>
            </>
          )
        )}
      </IonContent>
    </IonPage>
  );
};

export default Medium;
