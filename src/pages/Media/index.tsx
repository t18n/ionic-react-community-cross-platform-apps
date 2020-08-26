import './index.min.css';

import {
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
} from '@ionic/react';
import FollowCard, { follows } from 'components/molecules/FollowCard';
import Topbar from 'components/organisms/Topbar';
import { create, notifications } from 'ionicons/icons';
import React from 'react';

type Props = {
  history: any;
};

const Media: React.FC<Props> = ({ history }) => {
  const goToMedium = () => {
    history.push('/media/jd');
  };

  return (
    <IonPage>
      <IonHeader>
        <Topbar />
      </IonHeader>

      <IonContent className="bg-light">
        <div className="panel">
          <div className="grid-divided">
            <IonRow className="ion-text-center ion-align-items-end">
              <IonCol>
                <div className="text-xl">6</div>
                <IonText color="medium">
                  <div className="text-xs">saves</div>
                </IonText>
              </IonCol>
              <IonCol>
                <div className="text-xl">0</div>
                <IonText color="medium">
                  <div className="text-xs">comments</div>
                </IonText>
              </IonCol>
              <IonCol>
                <IonIcon icon={create} />
                <IonText color="medium">
                  <div className="text-xs">interests</div>
                </IonText>
              </IonCol>
            </IonRow>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <IonRow>
              <IonCol>Your job searches</IonCol>
              <IonCol size="auto">
                <IonText color="primary">
                  <span className="text-sm">
                    <strong>Manage</strong>
                  </span>
                </IonText>
              </IonCol>
            </IonRow>
          </div>
          <div className="panel-body no-padding">
            <IonItem lines="none">
              <IonLabel className="ion-text-wrap">
                <div>
                  <span className="text-sm">
                    <strong>Javascript Developer</strong>
                  </span>
                  <IonText color="success">
                    <span className="text-xs">
                      <strong> (15 new)</strong>
                    </span>
                  </IonText>
                </div>
                <IonText color="medium">
                  <div className="text-xs">Mars, Universe</div>
                </IonText>
              </IonLabel>
              <IonIcon icon={notifications} slot="end" color="primary" />
            </IonItem>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">Based on your Profile</div>
          <div className="panel-body no-padding">
            {follows.map((follow, i) => (
              <FollowCard
                key={i}
                items={follow.items}
                avatar={follow.avatar}
                connectionCount={follow.connectionCount}
                badge={follow.badge}
                firstName={follow.firstName}
                aboutMe={follow.aboutMe}
                timestamp={follow.timestamp}
                location={follow.location}
              />
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Media;
