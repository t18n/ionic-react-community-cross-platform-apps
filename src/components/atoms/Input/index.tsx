import './index.min.css';

import { JSX } from '@ionic/core';
import { IonInput, IonTextarea } from '@ionic/react';
import React, { forwardRef, HTMLAttributes } from 'react';

/**
 * Types
 */
type InputProps = JSX.IonInput & HTMLAttributes<HTMLIonInputElement>;
type TextareaProps = JSX.IonTextarea & HTMLAttributes<HTMLIonTextareaElement>;

/**
 * Components
 */
// eslint-disable-next-line react/display-name
export const Input = forwardRef((props: InputProps, ref: any) => {
  return <IonInput ref={ref} {...props} />;
});

export const Textarea = (props: TextareaProps) => {
  return <IonTextarea {...props} />;
};
