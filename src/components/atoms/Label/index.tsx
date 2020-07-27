import { JSX } from '@ionic/core';
import { IonLabel } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

type LabelProps = JSX.IonLabel & HTMLAttributes<HTMLIonLabelElement>;

export const Label = (props: LabelProps) => {
  return <IonLabel {...props}>{props.children}</IonLabel>;
};
