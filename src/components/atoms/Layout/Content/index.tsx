import { JSX } from '@ionic/core';
import { IonContent } from '@ionic/react';
import React, { HTMLAttributes, ReactNode } from 'react';

type ComponentProps = JSX.IonContent &
  HTMLAttributes<HTMLIonContentElement> & {
    children: ReactNode;
  };

export const Content = ({ children, className }: ComponentProps) => {
  return <IonContent className={className}>{children}</IonContent>;
};
