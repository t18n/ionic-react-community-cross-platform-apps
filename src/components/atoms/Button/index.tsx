import { JSX } from '@ionic/core';
import { IonButton } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

type ButtonProps = JSX.IonButton & HTMLAttributes<HTMLIonButtonElement>;

type BackButtonProps = JSX.IonBackButton & HTMLAttributes<HTMLIonBackButtonElement>;

type ButtonGroupProps = JSX.IonButtons &
  HTMLAttributes<HTMLIonButtonsElement> & {
    children: ReactNode;
  };

export const Button = (props: ButtonProps) => {
  return <IonButton {...props}>{props.children}</IonButton>;
};

export const ButtonGroup = (props: ButtonGroupProps) => {
  return <IonButton {...props}>{props.children}</IonButton>;
};

export const BackButton = (props: BackButtonProps) => {
  return <IonButton {...props}>{props.children}</IonButton>;
};
