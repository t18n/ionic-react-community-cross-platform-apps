import { JSX } from '@ionic/core';
import { IonTextarea } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

type TextareaProps = JSX.IonTextarea & HTMLAttributes<HTMLIonTextareaElement>;

export const Textarea = (props: TextareaProps) => {
  return <IonTextarea {...props} />;
};
