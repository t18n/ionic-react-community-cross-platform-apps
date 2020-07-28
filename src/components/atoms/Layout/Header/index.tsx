import { IonHeader } from '@ionic/react';
import React, { ReactNode } from 'react';

type HeaderProps = {
  children: ReactNode;
};

export function Header(props: HeaderProps) {
  return <IonHeader className="ion-no-border">{props.children}</IonHeader>;
}
