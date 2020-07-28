import { IonToolbar } from '@ionic/react';
import React, { ReactNode } from 'react';

type ToolbarProps = {
  children: ReactNode;
};

export function Toolbar(props: ToolbarProps) {
  return <IonToolbar>{props.children}</IonToolbar>;
}
