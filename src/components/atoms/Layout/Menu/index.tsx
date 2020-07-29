import { JSX } from '@ionic/core';
import { IonMenu } from '@ionic/react';
import React, { HTMLAttributes, ReactNode } from 'react';

type MenuProps = JSX.IonMenu &
  HTMLAttributes<HTMLIonMenuElement> & {
    children: ReactNode;
  };

export const Menu = (props: MenuProps) => {
  return <IonMenu>{props.children}</IonMenu>;
};
