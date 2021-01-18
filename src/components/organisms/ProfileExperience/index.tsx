import './index.min.css';

import { IonButton, IonCol, IonIcon, IonRow, IonText, IonThumbnail } from '@ionic/react';
import faker from 'faker';
import { create } from 'ionicons/icons';
import React from 'react';

const ProfileExperience = () => {
  return (
    <div className="profile-experience">
      <div className="panel">
        <div className="panel-header">
          <IonRow>
            <IonCol>Experience</IonCol>
            <IonCol size="auto">
              <IonButton fill="clear" color="primary" size="small" className="button-edit">
                <IonIcon slot="icon-only" icon={create} />
              </IonButton>
            </IonCol>
          </IonRow>
        </div>

        <div className="panel-body">
          <div>
            <IonRow>
              <IonCol size="auto">
                <IonThumbnail>
                  <img src={faker.image.avatar()} alt="" />
                </IonThumbnail>
              </IonCol>
              <IonCol>
                <div>
                  <strong>{faker.name.jobTitle()}</strong>
                </div>
                <div className="text-sm">{faker.company.companyName()}</div>
                <div className="text-xs">
                  <IonText color="medium">Aug 2014 - Present · 5 yr 2 mos</IonText>
                </div>
              </IonCol>
            </IonRow>
          </div>

          <div>
            <IonRow>
              <IonCol size="auto">
                <IonThumbnail>
                  <img src={faker.image.avatar()} alt="" />
                </IonThumbnail>
              </IonCol>
              <IonCol>
                <div>
                  <strong>{faker.name.jobTitle()}</strong>
                </div>
                <div className="text-sm">{faker.company.companyName()}</div>
                <div className="text-xs">
                  <IonText color="medium">Aug 2014 - Present · 5 yr 2 mos</IonText>
                </div>
              </IonCol>
            </IonRow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileExperience;
