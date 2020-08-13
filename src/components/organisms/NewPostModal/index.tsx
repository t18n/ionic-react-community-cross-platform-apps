import './index.min.css';

import { IonModal } from '@ionic/react';
import { Settings } from 'context/Settings';
import NewPost from 'pages/NewPost';
import React from 'react';

export const NewPostModal = () => {
  return (
    <Settings.Consumer>
      {({ modals, closeModal }) => (
        <IonModal isOpen={modals.newPost}>
          <NewPost onClose={() => closeModal('newPost')} />
        </IonModal>
      )}
    </Settings.Consumer>
  );
};
