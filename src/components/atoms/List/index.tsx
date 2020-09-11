import './index.min.css';

import { JSX } from '@ionic/core';
import { IonList, IonListHeader } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

type ListProps = JSX.IonList & HTMLAttributes<HTMLIonColElement>;

type ListHeaderProps = JSX.IonListHeader & HTMLAttributes<HTMLIonListHeaderElement>;

export const List = (props: ListProps) => {
  return <IonList {...props} />;
};

export const ListHeader = (props: ListHeaderProps) => {
  return <IonListHeader {...props} />;
};
