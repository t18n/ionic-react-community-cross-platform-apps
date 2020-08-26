import './index.min.css';

import {
  IonAvatar,
  IonButton,
  IonCol,
  IonIcon,
  IonRow,
  IonText,
  IonThumbnail,
} from '@ionic/react';
import faker from 'faker';
import { create } from 'ionicons/icons';
import React from 'react';

const ProfileSkills = () => {
  return (
    <div className="profile-skills">
      <div className="panel">
        <div className="panel-header">
          <IonRow>
            <IonCol>
              <div>Skills Endorsements</div>
              <IonButton fill="outline" color="primary" size="small">
                Take skill quiz
              </IonButton>
            </IonCol>
            <IonCol size="auto">
              <IonButton fill="clear" color="primary" size="small" className="button-edit">
                <IonIcon slot="icon-only" icon={create} mode="ios" />
              </IonButton>
            </IonCol>
          </IonRow>
        </div>

        <div className="panel-body">
          {[0, 1].map((i) => (
            <div className="skill-item" key={i}>
              <div>
                <strong>Javascript</strong> ·{' '}
                <IonText color="medium">
                  <span className="text-sm">25</span>
                </IonText>
              </div>
              <IonRow>
                <IonCol size="auto">
                  <IonAvatar className="thumbnail-tiny">
                    <img src={faker.image.avatar()} alt="" />
                  </IonAvatar>
                </IonCol>
                <IonCol>
                  <div className="text-sm">
                    Endorsed by Captain and 2 others who are highly skilled at this
                  </div>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="auto">
                  <IonThumbnail className="thumbnail-tiny">
                    <img src={faker.image.avatar()} alt="" />
                  </IonThumbnail>
                </IonCol>
                <IonCol>
                  <div className="text-sm">Endorsed by 2 of your colleagues at Avengers Lab</div>
                </IonCol>
              </IonRow>
            </div>
          ))}

          <IonButton expand="block" fill="clear" color="primary" size="small">
            See all
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkills;
