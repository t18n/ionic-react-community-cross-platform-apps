import { JSX } from '@ionic/core';
import { IonChip } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

type ChipProps = JSX.IonChip & HTMLAttributes<HTMLIonChipElement>;

export const Chip = (props: ChipProps) => {
  return <IonChip {...props}>{props.children}</IonChip>;
};
