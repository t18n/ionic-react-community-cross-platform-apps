import { JSX } from '@ionic/core';
import { IonItem, IonList, IonListHeader } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

type ListItemProps = JSX.IonItem &
  HTMLAttributes<HTMLIonItemElement> & {
    routerLink?: string;
  };

type ListProps = JSX.IonList & HTMLAttributes<HTMLIonColElement>;

type ListHeaderProps = JSX.IonListHeader & HTMLAttributes<HTMLIonListHeaderElement>;

export const Item = (props: ListItemProps) => {
  return <IonItem {...props} />;
};

export const List = (props: ListProps) => {
  return <IonList {...props} />;
};

export const ListHeader = (props: ListHeaderProps) => {
  return <IonListHeader {...props} />;
};
