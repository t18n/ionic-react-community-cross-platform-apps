import { JSX } from '@ionic/core';
import { IonDatetime } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

type DateTimePickerProps = JSX.IonDatetime & HTMLAttributes<HTMLIonDatetimeElement>;

export const DateTimePicker = (props: DateTimePickerProps) => {
  return <IonDatetime {...props}>{props.children}</IonDatetime>;
};
