import './index.min.css';

import { IonModal } from '@ionic/react';
import { SettingContext } from 'context/Setting';
import NewPost from 'pages/NewPost';
import React from 'react';

export const NewPostModal = () => {
  return (
    <SettingContext.Consumer>
      {({ modals, closeModal }) => (
        <IonModal isOpen={modals.newPost}>
          <NewPost onClose={() => closeModal('newPost')} />
        </IonModal>
      )}
    </SettingContext.Consumer>
  );
};
