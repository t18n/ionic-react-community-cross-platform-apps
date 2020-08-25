import { JSX } from '@ionic/core';
import { IonRadio, IonRadioGroup } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

/**
 * Type
 */
type RadioProps = JSX.IonRadio & HTMLAttributes<HTMLIonRadioElement>;

type RadioGroupProps = JSX.IonRadioGroup & HTMLAttributes<HTMLIonRadioGroupElement>;

/**
 * Component
 */
export const Radio = (props: RadioProps) => {
  return <IonRadio {...props} />;
};

export const RadioGroup = (props: RadioGroupProps) => {
  return <IonRadioGroup {...props} />;
};
