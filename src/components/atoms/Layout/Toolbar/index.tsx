import { JSX } from '@ionic/core';
import { IonTitle, IonToolbar } from '@ionic/react';
import React, { HTMLAttributes, ReactNode } from 'react';

/**
 * Type
 */
type ToolbarProps = JSX.IonToolbar &
  HTMLAttributes<HTMLIonToolbarElement> & {
    children: ReactNode;
  };

type TitleProps = JSX.IonTitle & HTMLAttributes<HTMLIonTitleElement>;

/**
 * Component
 */
export const Toolbar = (props: ToolbarProps) => {
  return <IonToolbar {...props} />;
};

export const ToolbarTitle = (props: TitleProps) => {
  return <IonTitle {...props} />;
};
