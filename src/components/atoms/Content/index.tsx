import { IonContent } from '@ionic/react';
import React, { HTMLAttributes, ReactNode } from 'react';

type ComponentProps = HTMLAttributes<HTMLIonContentElement> & {
  children: ReactNode;
};

export const Content = (props: ComponentProps) => {
  return <IonContent>{props.children}</IonContent>;
};
