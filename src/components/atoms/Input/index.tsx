import { JSX } from '@ionic/core';
import { IonInput, IonTextarea } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

/**
 * Types
 */
type InputProps = JSX.IonInput & HTMLAttributes<HTMLIonInputElement>;
type TextareaProps = JSX.IonTextarea & HTMLAttributes<HTMLIonTextareaElement>;

/**
 * Components
 */
export const Input = (props: InputProps) => {
  return <IonInput {...props} />;
};

export const Textarea = (props: TextareaProps) => {
  return <IonTextarea {...props} />;
};
