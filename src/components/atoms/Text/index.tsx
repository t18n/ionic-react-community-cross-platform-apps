import { JSX } from '@ionic/core';
import { IonText } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

/**
 * Types
 */
type TextProps = JSX.IonText & HTMLAttributes<HTMLIonTextElement>;

/**
 * Components
 */
export const Text = (props: TextProps) => {
  return <IonText {...props} />;
};
