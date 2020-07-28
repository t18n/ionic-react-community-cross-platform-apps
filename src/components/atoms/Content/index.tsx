import { JSX } from '@ionic/core';
import { IonContent } from '@ionic/react';
import React, { HTMLAttributes, ReactNode } from 'react';

type ComponentProps = JSX.IonContent &
  HTMLAttributes<HTMLIonContentElement> & {
    children: ReactNode;
    width?: string;
    height?: string;
  };

export const Content = (props: ComponentProps) => {
  return (
    <IonContent>
      <div style={{ width: props.width || '100%', height: props.height || '100%' }}>
        {props.children}
      </div>
    </IonContent>
  );
};
