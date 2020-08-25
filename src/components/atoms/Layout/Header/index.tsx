import { JSX } from '@ionic/core';
import { IonHeader } from '@ionic/react';
import React, { HTMLAttributes, ReactNode } from 'react';

type HeaderProps = JSX.IonHeader &
  HTMLAttributes<HTMLHeadElement> & {
    children: ReactNode;
  };

export function Header(props: HeaderProps) {
  return <IonHeader {...props} />;
}
