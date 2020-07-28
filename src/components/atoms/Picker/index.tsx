import { JSX } from '@ionic/core';
import { IonDatetime, IonPicker } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

/**
 * Types
 */
type DatetimePickerProps = JSX.IonDatetime & HTMLAttributes<HTMLIonDatetimeElement>;
type PickerProps = JSX.IonPicker &
  HTMLAttributes<HTMLIonPickerElement> &
  Required<Pick<JSX.IonPicker, 'columns'>> & {
    isOpen: boolean;
  };

/**
 * Picker
 */
export const Picker = (props: PickerProps) => {
  return <IonPicker {...props}>{props.children}</IonPicker>;
};

export const DatetimePicker = (props: DatetimePickerProps) => {
  return <IonDatetime {...props}>{props.children}</IonDatetime>;
};
