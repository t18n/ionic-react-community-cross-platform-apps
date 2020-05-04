import React, { IonPage } from '@ionic/react';
import { FC } from 'react';

interface LayoutProps {
  id: string;
}

export const Layout: FC<LayoutProps> = ({ children, id }) => {
  return <IonPage id={id}>{children}</IonPage>;
};
