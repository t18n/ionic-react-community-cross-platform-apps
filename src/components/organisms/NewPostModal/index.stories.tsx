import { IonButton, IonModal } from '@ionic/react';
import React, { useState } from 'react';

import { NewPostModal } from '.';

export default {
  title: 'NewPostModal',
  component: NewPostModal,
};

export const Default = () => {
  const [showOptions, setShowOptions] = useState(false);

  const openOptions = () => {
    setShowOptions(true);
  };

  const closeOptions = () => {
    setShowOptions(false);
  };

  return (
    <>
      <NewPostModal />
      <IonButton fill="outline" color="medium" size="small" onClick={openOptions}>
        Open Modal
      </IonButton>

      <IonModal isOpen={showOptions} cssClass="custom-modal-half" onDidDismiss={closeOptions}>
        Hello
      </IonModal>
    </>
  );
};
