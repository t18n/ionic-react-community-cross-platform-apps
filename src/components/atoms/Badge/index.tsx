import { JSX } from '@ionic/core';
import { IonBadge } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

type BadgeProps = JSX.IonBadge & HTMLAttributes<HTMLIonBadgeElement>;

export const Badge = (props: BadgeProps) => {
  return <IonBadge {...props} />;
};
