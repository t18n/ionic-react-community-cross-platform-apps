import './index.min.css';

import { JSX } from '@ionic/core';
import { IonModal } from '@ionic/react';
import React, { ReactNode, RefAttributes } from 'react';

type ModalProps = Omit<JSX.IonModal, 'component'> &
  RefAttributes<HTMLIonModalElement> & {
    children: ReactNode;
    isOpen: boolean;
  };

export const Modal = (props: ModalProps) => {
  return <IonModal {...props} />;
};
