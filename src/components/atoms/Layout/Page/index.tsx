import { IonPage } from '@ionic/react';
import React, { ReactNode } from 'react';

type PageProps = {
  children: ReactNode;
};

export const Page = (props: PageProps) => {
  return <IonPage>{props.children}</IonPage>;
};
