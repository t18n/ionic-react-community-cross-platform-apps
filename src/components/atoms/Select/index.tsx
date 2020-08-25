import { JSX } from '@ionic/core';
import { IonSelect, IonSelectOption } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

export const SelectOption = (
  props: JSX.IonSelectOption & HTMLAttributes<HTMLIonSelectOptionElement>
) => {
  return <IonSelectOption {...props} />;
};

export const Select = (props: JSX.IonSelect & HTMLAttributes<HTMLIonSelectElement>) => {
  return <IonSelect {...props} />;
};
