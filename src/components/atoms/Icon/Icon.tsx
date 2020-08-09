import { IonIcon } from '@ionic/react';
import React from 'react';

export type IconProps = {
  ariaLabel?: string;
  color?: string;
  flipRtl?: boolean;
  icon?: string;
  ios?: string;
  lazy?: boolean;
  md?: string;
  mode?: 'ios' | 'md';
  name?: string;
  size?: 'large' | 'small';
  src?: string;
  slot?: 'start' | 'end' | 'icon-only';
};

export const Icon = (props: IconProps) => {
  return <IonIcon {...props} />;
};