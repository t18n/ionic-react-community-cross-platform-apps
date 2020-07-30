import { JSX } from '@ionic/core';
import { IonRouterLink } from '@ionic/react';
import React, { HTMLAttributes, ReactNode } from 'react';

/**
 * Types
 */
type RouterLinkProps = JSX.IonRouterLink &
  HTMLAttributes<HTMLIonRouterLinkElement> & {
    children: ReactNode;
  };

/**
 * Components
 */
export const Link = (props: RouterLinkProps) => {
  return <IonRouterLink {...props} />;
};
