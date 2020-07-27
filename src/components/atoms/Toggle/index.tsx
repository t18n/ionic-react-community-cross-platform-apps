import { JSX } from '@ionic/core';
import { IonToggle } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

type ToggleProps = JSX.IonToggle & HTMLAttributes<HTMLIonToggleElement>;

export const Toggle = (props: ToggleProps) => {
  return <IonToggle {...props}>{props.children}</IonToggle>;
};
