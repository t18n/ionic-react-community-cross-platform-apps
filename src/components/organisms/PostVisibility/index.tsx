import './index.min.css';

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { close, globe, logoFacebook, logoIonic, logoPinterest, people } from 'ionicons/icons';
import React from 'react';

type Props = {
  onClose: () => void;
};

const PostVisibility = (props: Props) => {
  const closeModal = () => {
    props.onClose();
  };

  return (
    <>
      <IonHeader>
        <IonToolbar className="border-0" color="light">
          <IonButtons slot="start">
            <IonButton color="medium" onClick={closeModal}>
              <IonIcon slot="icon-only" icon={close} />
            </IonButton>
          </IonButtons>

          <IonTitle>Who can see this post?</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollY={false}>
        <IonList>
          <IonRadioGroup>
            <IonItem>
              <IonIcon icon={globe} slot="start" mode="md" color="medium" />
              <IonLabel color="primary">
                <div className="text-sm">
                  <strong>Anyone</strong>
                </div>
              </IonLabel>
              <IonRadio slot="end" defaultChecked></IonRadio>
            </IonItem>
            <IonItem>
              <IonIcon icon={globe} slot="start" mode="md" color="medium" />
              <IonLabel color="medium">
                <div className="text-sm">
                  <strong>Anyone + Twitter (@TurboThinh)</strong>
                </div>
              </IonLabel>
              <IonRadio slot="end"></IonRadio>
            </IonItem>
            <IonItem>
              <IonIcon icon={people} slot="start" mode="md" color="medium" />
              <IonLabel color="medium">
                <div className="text-sm">
                  <strong>Connections</strong>
                </div>
              </IonLabel>
              <IonRadio slot="end"></IonRadio>
            </IonItem>
            <IonItem>
              <IonIcon icon={logoIonic} slot="start" mode="md" color="medium" />
              <IonLabel color="medium">
                <div className="text-sm">
                  <strong>Ionic framework</strong>
                </div>
              </IonLabel>
              <IonRadio slot="end"></IonRadio>
            </IonItem>
            <IonItem>
              <IonIcon icon={logoFacebook} slot="start" mode="md" color="medium" />
              <IonLabel color="medium">
                <div className="text-sm">
                  <strong>Facebook</strong>
                </div>
              </IonLabel>
              <IonRadio slot="end"></IonRadio>
            </IonItem>
            <IonItem>
              <IonIcon icon={logoPinterest} slot="start" mode="md" color="medium" />
              <IonLabel color="medium">
                <div className="text-sm">
                  <strong>Pinterest</strong>
                </div>
              </IonLabel>
              <IonRadio slot="end"></IonRadio>
            </IonItem>
          </IonRadioGroup>
        </IonList>
      </IonContent>
    </>
  );
};

export default PostVisibility;
