import { JSX } from '@ionic/core';
import { IonMenu, IonMenuToggle } from '@ionic/react';
import React, { HTMLAttributes, ReactNode } from 'react';

type MenuProps = JSX.IonMenu &
  HTMLAttributes<HTMLIonMenuElement> & {
    children: ReactNode;
  };

type MenuToggleProps = JSX.IonMenuToggle &
  HTMLAttributes<HTMLIonMenuToggleElement> & {
    children: ReactNode;
  };

export const Menu = (props: MenuProps) => {
  return <IonMenu>{props.children}</IonMenu>;
};

export const MenuToggle = (props: MenuToggleProps) => {
  return <IonMenuToggle>{props.children}</IonMenuToggle>;
};