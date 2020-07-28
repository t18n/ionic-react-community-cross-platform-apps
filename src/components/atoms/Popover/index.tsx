import { JSX } from '@ionic/core';
import { IonPopover } from '@ionic/react';
import React, { HTMLAttributes, ReactNode } from 'react';

/**
 * Types
 */
type PopoverProps = JSX.IonPopover &
  HTMLAttributes<HTMLIonPopoverElement> & {
    children: ReactNode;
    isOpen: boolean;
  };

/**
 * Components
 */
export const Popover = (props: PopoverProps) => {
  return <IonPopover {...props} />;
};
