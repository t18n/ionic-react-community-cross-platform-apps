import './index.min.css';

import { IonButton, IonItem, IonLabel, IonText, IonThumbnail } from '@ionic/react';
import faker from 'faker';
import React from 'react';

const ProfileActivity = () => {
  return (
    <div className="profile-activity">
      <div className="panel">
        <div className="panel-header">
          <div>{faker.company.companyName()}</div>
          <div className="text-sm">
            <IonText color="medium" className="ion-margin-end">
              {faker.random.number()} followers
            </IonText>

            <IonText color="primary">
              <span className="text-sm">
                <strong>Manage followers</strong>
              </span>
            </IonText>
          </div>
        </div>

        <div className="panel-body">
          <div className="shared-article">
            <IonItem lines="none" color="light" className="ion-justify-content-start">
              <IonLabel className="ion-text-wrap">
                <div className="text-sm">
                  <strong>{faker.lorem.paragraph()}</strong>
                </div>
                <div className="text-sm">
                  {faker.lorem.paragraph()}
                  <IonText color="medium">...see more</IonText>
                </div>
              </IonLabel>
              <IonThumbnail slot="end">
                <img src={faker.image.avatar()} alt="" />
              </IonThumbnail>
            </IonItem>
            <IonText color="medium">
              <div className="text-xs">{faker.random.number()} Reactions</div>
            </IonText>
          </div>

          <IonButton expand="block" fill="clear" color="primary" size="small">
            See all articles
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default ProfileActivity;
