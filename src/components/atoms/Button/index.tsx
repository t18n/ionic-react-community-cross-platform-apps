import './index.min.css';

import { JSX } from '@ionic/core';
import { IonBackButton, IonButton, IonButtons, IonToggle } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

/**
 * Types
 */
type ButtonProps = JSX.IonButton &
  HTMLAttributes<HTMLIonButtonElement> & {
    routerLink?: string;
  };

type BackButtonProps = JSX.IonBackButton & HTMLAttributes<HTMLIonBackButtonElement>;
type ButtonGroupProps = JSX.IonButtons & HTMLAttributes<HTMLIonButtonsElement>;
type ToggleProps = JSX.IonToggle & HTMLAttributes<HTMLIonToggleElement>;

/**
 * Components
 */
export const Button = (props: ButtonProps) => {
  return <IonButton {...props} />;
};

export const ButtonBack = (props: BackButtonProps) => {
  return <IonBackButton {...props} />;
};

export const ButtonGroup = (props: ButtonGroupProps) => {
  return <IonButtons {...props} />;
};

export const Toggle = (props: ToggleProps) => {
  return <IonToggle {...props} />;
};
