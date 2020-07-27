import { JSX } from '@ionic/core';
import { IonButton } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

type ButtonProps = JSX.IonButton & HTMLAttributes<HTMLIonButtonElement>;

export const Button = (props: ButtonProps) => {
  return <IonButton {...props}>{props.children}</IonButton>;
};
