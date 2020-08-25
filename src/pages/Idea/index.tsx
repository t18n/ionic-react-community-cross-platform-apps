import './index.pcss';

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSearchbar,
  IonText,
  IonThumbnail,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import faker from 'faker';
import { add, checkmarkCircle, checkmarkCircleOutline, expand, open } from 'ionicons/icons';
import React, { useState } from 'react';

export const Idea = () => {
  const [isFocused, setIsFocused] = useState(false);

  const onSearchFocus = () => {
    setIsFocused(true);
  };

  const onSearchBlur = () => {
    setIsFocused(false);
  };

  return (
    <IonPage className="job-detail-page">
      <IonHeader>
        <IonToolbar className="toolbar-search border-0" color="primary">
          {!isFocused && (
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
          )}

          <div className="searchbar-wrapper">
            <IonSearchbar
              placeholder="takethatdesign.com"
              value="Senior Frontend Engineer"
              showCancelButton="focus"
              onIonFocus={onSearchFocus}
              onIonCancel={onSearchBlur}
            ></IonSearchbar>
          </div>

          {!isFocused && (
            <IonButtons slot="end" className="pos-rlt">
              <IonButton fill="clear">
                <IonIcon slot="icon-only" icon={expand} mode="ios" />
              </IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>

      <IonContent className="bg-light">
        <div className="panel">
          <div
            className="cover-background"
            style={{ backgroundImage: `url(${faker.image.avatar()})` }}
          ></div>

          <div className="panel-body">
            <div className="profile-summary">
              <IonThumbnail className="profile-logo">
                <img src={faker.image.avatar()} alt="" />
              </IonThumbnail>
              <div className="profile-name">{faker.name.jobTitle()}</div>
              <div className="m-b-sm">
                <strong>Career Interest</strong>
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
                  <IonIcon icon={open} mode="md" />
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
            <IonRow className="ion-align-items-center">
              <IonCol size="auto">
                <IonIcon icon={checkmarkCircle} mode="md" color="primary" size="small" />
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
            <IonRow className="ion-align-items-center">
              <IonCol size="auto">
                <IonIcon icon={checkmarkCircle} mode="md" color="primary" size="small" />
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
                  mode="ios"
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
            <IonRow className="ion-align-items-center">
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
                <IonButton fill="clear" className="button-no-padding" color="primary" size="small">
                  <IonIcon icon={add} mode="ios" />
                  Follow
                </IonButton>
              </IonCol>
            </IonRow>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
