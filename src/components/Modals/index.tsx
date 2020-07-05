import './index.min.css';

import { IonModal } from '@ionic/react';
import React from 'react';

import { Settings } from '../../context/Settings';
import NewPost from '../../pages/NewPost/NewPost';

const Modals = () => {
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

export default Modals;
