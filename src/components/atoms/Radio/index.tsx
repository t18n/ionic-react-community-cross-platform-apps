import { JSX } from '@ionic/core';
import { IonRadio } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

type RadioProps = JSX.IonRadio & HTMLAttributes<HTMLIonRadioElement>;

export const Radio = (props: RadioProps) => {
  return <IonRadio {...props}>{props.children}</IonRadio>;
};
