import './index.min.css';

import { JSX } from '@ionic/core';
import {
  IonItem,
  IonItemDivider,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
} from '@ionic/react';
import React, { HTMLAttributes } from 'react';

/**
 * Types
 */
type ItemDividerProps = JSX.IonItemDivider & HTMLAttributes<HTMLIonItemDividerElement>;
type ItemProps = JSX.IonItem & HTMLAttributes<HTMLIonItemElement>;
type ItemSlidingProps = JSX.IonItemSliding & HTMLAttributes<HTMLIonItemSlidingElement>;
type ItemOptionProps = JSX.IonItemOption & HTMLAttributes<HTMLIonItemOptionElement>;
type ItemOptionGroupProps = JSX.IonItemOptions & HTMLAttributes<HTMLIonItemOptionsElement>;
type LabelProps = JSX.IonLabel & HTMLAttributes<HTMLIonLabelElement>;

/**
 * Components
 */
export const ItemDivider = (props: ItemDividerProps) => {
  return <IonItemDivider {...props} />;
};

export const Item = ({ lines = 'none', ...rest }: ItemProps) => {
  return <IonItem lines={lines} {...rest} />;
};

export const ItemSliding = (props: ItemSlidingProps) => {
  return <IonItemSliding {...props} />;
};

export const ItemOptionGroup = (props: ItemOptionGroupProps) => {
  return <IonItemOptions {...props} />;
};

export const ItemOption = (props: ItemOptionProps) => {
  return <IonItemOption {...props} />;
};

export const Label = (props: LabelProps) => {
  return <IonLabel {...props} />;
};
