import './index.min.css';

import { IonButton, IonCol, IonIcon, IonRow, IonText, IonThumbnail } from '@ionic/react';
import faker from 'faker';
import { create } from 'ionicons/icons';
import React from 'react';

const ProfileEducation = () => {
  return (
    <div className="profile-education">
      <div className="panel">
        <div className="panel-header">
          <IonRow>
            <IonCol>Education</IonCol>
            <IonCol size="auto">
              <IonButton fill="clear" color="primary" size="small" className="button-edit">
                <IonIcon slot="icon-only" icon={create} mode="md" />
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
                  <strong>{faker.lorem.sentence()}</strong>
                </div>
                <div className="text-sm">{faker.name.jobTitle()}</div>
                <div className="text-xs">
                  <IonText color="medium">
                    {faker.date.past().getFullYear()} - {faker.date.future().getFullYear()}
                  </IonText>
                </div>
              </IonCol>
            </IonRow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEducation;
