import { IonFooter } from '@ionic/react';
import React, { ReactNode } from 'react';

type FooterProps = {
  children: ReactNode;
};

export function Footer(props: FooterProps) {
  return <IonFooter {...props} />;
}
