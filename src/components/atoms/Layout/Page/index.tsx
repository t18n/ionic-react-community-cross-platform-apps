import { IonPage } from '@ionic/react';
import React, { ReactNode } from 'react';

type PageProps = {
  children: ReactNode;
};

export const Page = ({ children }: PageProps) => {
  return <IonPage>{children}</IonPage>;
};
