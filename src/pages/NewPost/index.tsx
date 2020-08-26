import './index.min.css';

import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonModal,
  IonTextarea,
  IonToolbar,
} from '@ionic/react';
import PostVisibility from 'components/organisms/PostVisibility';
import faker from 'faker';
import {
  camera,
  chevronDown,
  close,
  expand,
  globe,
  image,
  keypad,
  videocam,
} from 'ionicons/icons';
import React, { useState } from 'react';

type Props = {
  onClose: () => void;
};

const NewPost = (props: Props) => {
  const [showOptions, setShowOptions] = useState(false);
  const closeModal = () => {
    props.onClose();
  };

  const openOptions = () => {
    setShowOptions(true);
  };

  const closeOptions = () => {
    setShowOptions(false);
  };

  return (
    <>
      <IonHeader>
        <IonToolbar className="border-0" color="primary">
          <IonButtons slot="start">
            <IonButton onClick={closeModal}>
              <IonIcon slot="icon-only" icon={close} />
            </IonButton>
          </IonButtons>

          <IonButtons slot="end">
            <IonButton disabled>Post</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="new-post-page pa-m">
        <IonAvatar className="floating-avatar" slot="fixed">
          <img src={faker.image.avatar()} alt="" />
        </IonAvatar>

        <div className="pt-m">
          <div className="ion-text-center">
            <IonButton fill="outline" color="medium" size="small" onClick={openOptions}>
              <IonIcon icon={globe} slot="start" />
              Anyone
              <IonIcon icon={chevronDown} slot="end" />
            </IonButton>
          </div>

          <IonTextarea autoGrow placeholder="What do you want to talk about?"></IonTextarea>
        </div>
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton fill="clear" color="medium">
              <IonIcon slot="icon-only" icon={camera} />
            </IonButton>
            <IonButton fill="clear" color="medium">
              <IonIcon slot="icon-only" icon={videocam} />
            </IonButton>
            <IonButton fill="clear" color="medium">
              <IonIcon slot="icon-only" icon={image} />
            </IonButton>
            <IonButton fill="clear" color="medium">
              <IonIcon slot="icon-only" icon={expand} />
            </IonButton>
          </IonButtons>

          <IonButtons slot="end">
            <IonButton fill="clear" color="medium">
              <IonIcon slot="icon-only" icon={keypad} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>

      <IonModal isOpen={showOptions} cssClass="custom-modal-half" onDidDismiss={closeOptions}>
        <PostVisibility onClose={closeOptions} />
      </IonModal>
    </>
  );
};

export default NewPost;
