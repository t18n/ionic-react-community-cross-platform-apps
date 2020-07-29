import { JSX } from '@ionic/core';
import { IonToolbar } from '@ionic/react';
import React, { HTMLAttributes, ReactNode } from 'react';

type ToolbarProps = JSX.IonToolbar &
  HTMLAttributes<HTMLIonToolbarElement> & {
    children: ReactNode;
  };

export const Toolbar = (props: ToolbarProps) => {
  return <IonToolbar>{props.children}</IonToolbar>;
};
