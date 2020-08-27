import './index.min.css';

import { IonAvatar, IonCol, IonRow } from '@ionic/react';
import faker from 'faker';
import React from 'react';

const ProfileHighlights = () => {
  return (
    <div className="profile-highlights">
      <div className="panel">
        <div className="panel-header">Highlights</div>
        <div className="panel-body has-grid">
          <div className="media-item">
            <IonRow>
              <IonCol size="auto">
                <IonAvatar className="small">
                  <img src={faker.image.avatar()} alt="" />
                </IonAvatar>
              </IonCol>
              <IonCol>
                <div className="text-sm">
                  <strong>{faker.random.number()} mutual connections</strong>
                </div>
                <div className="chat-body text-sm">
                  You and {faker.name.firstName()} both know {faker.name.firstName()},{' '}
                  {faker.name.firstName()}, and {faker.random.number()} others
                </div>
              </IonCol>
            </IonRow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHighlights;
