import { JSX } from '@ionic/core';
import { IonToast } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

type ToastProps = JSX.IonToast &
  HTMLAttributes<HTMLIonToastElement> & {
    isOpen: boolean;
    onDidDismiss: (e?: any) => void;
  };

export const Toast = (props: ToastProps) => {
  return <IonToast {...props}>{props.children}</IonToast>;
};
