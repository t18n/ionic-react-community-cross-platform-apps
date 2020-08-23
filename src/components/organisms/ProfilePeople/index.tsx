import './index.min.css';

import { IonAvatar, IonButton, IonCol, IonIcon, IonRow } from '@ionic/react';
import faker from 'faker';
import { chatbubbles } from 'ionicons/icons';
import React from 'react';

const items = [
  {
    image: faker.image.avatar(),
    name: faker.name.firstName(),
    job: faker.name.jobTitle(),
  },
  {
    image: faker.image.avatar(),
    name: faker.name.firstName(),
    job: faker.name.jobTitle(),
  },
  {
    image: faker.image.avatar(),
    name: faker.name.firstName(),
    job: faker.name.jobTitle(),
  },
  {
    image: faker.image.avatar(),
    name: faker.name.firstName(),
    job: faker.name.jobTitle(),
  },
];

const ProfilePeople = () => {
  return (
    <div className="profile-people">
      <div className="panel bg-reverted has-fab">
        <div className="panel-header">
          <div className="ion-text-center">People Also Viewed</div>
        </div>

        <div className="panel-body has-grid">
          {items.map((item, i) => (
            <IonRow className="ion-align-items-center" key={i}>
              <IonCol size="auto">
                <IonAvatar className="avatar">
                  <img src={item.image} alt="" />
                  <div className="avatar-status">
                    <div className="online-status active"></div>
                  </div>
                </IonAvatar>
              </IonCol>
              <IonCol>
                <div>
                  <strong>{item.name}</strong>
                </div>
                <div className="text-sm">{item.job}</div>
              </IonCol>
              <IonCol className="p-0" size="auto">
                <IonButton fill="clear" className="button-no-padding" color="white">
                  <IonIcon slot="icon-only" icon={chatbubbles} mode="ios" />
                </IonButton>
              </IonCol>
            </IonRow>
          ))}
        </div>
      </div>
    </div>
  );
};

ProfilePeople.defaultProps = {
  isThat: true,
};

export default ProfilePeople;
