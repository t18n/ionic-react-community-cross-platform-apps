import { JSX } from '@ionic/core';
import { IonPopover } from '@ionic/react';
import React, { HTMLAttributes, ReactNode } from 'react';

/**
 * Types
 */
type PopoverProps = Partial<JSX.IonPopover> &
  HTMLAttributes<HTMLIonPopoverElement> & {
    children: ReactNode;
    isOpen: boolean;
    onDidDismiss: (e: any) => void;
  };

/**
 * Components
 */
export const Popover = (props: PopoverProps) => {
  return <IonPopover {...props} />;
};
