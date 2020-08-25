import { JSX } from '@ionic/core';
import { IonCheckbox } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

type CheckboxProps = JSX.IonCheckbox & HTMLAttributes<HTMLIonCheckboxElement>;

export const Checkbox = (props: CheckboxProps) => {
  return <IonCheckbox {...props} />;
};
