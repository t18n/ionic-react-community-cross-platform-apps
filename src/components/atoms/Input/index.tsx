import { JSX } from '@ionic/core';
import { IonInput } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

type InputProps = JSX.IonInput & HTMLAttributes<HTMLIonInputElement>;

export const Input = (props: InputProps) => {
  return <IonInput {...props} />;
};
