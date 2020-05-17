import { IonPage } from '@ionic/react';
import React, { FC } from 'react';

import { Header, HeaderProps } from '../Header';

interface LayoutProps extends HeaderProps {
  id: string;
}

export const Layout: FC<LayoutProps> = ({ children, id, title }) => {
  return (
    <IonPage id={id}>
      <Header title={title} />
      {children}
    </IonPage>
  );
};
