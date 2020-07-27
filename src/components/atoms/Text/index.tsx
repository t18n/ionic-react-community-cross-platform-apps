import { JSX } from '@ionic/core';
import { IonText } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

type TextProps = JSX.IonText & HTMLAttributes<HTMLIonTextElement>;

export const Text = (props: TextProps) => {
  return <IonText {...props} />;
};
