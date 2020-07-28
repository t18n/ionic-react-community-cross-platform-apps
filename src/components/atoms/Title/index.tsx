import { IonTitle } from '@ionic/react';
import React, { ReactNode } from 'react';

type TitleProps = {
  children: ReactNode;
};

export function Title(props: TitleProps) {
  return <IonTitle>{props.children}</IonTitle>;
}
