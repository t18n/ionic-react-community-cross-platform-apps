import './index.min.css';

import { IonIcon } from '@ionic/react';
import React, { HTMLAttributes, useEffect } from 'react';

export type IconProps = HTMLAttributes<HTMLIonIconElement> & {
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
  part?: 'icon';
};

export const Icon = ({ ...rest }: IconProps) => {
  // TODO: Use CSS to set all SVG icons stroke-width to 1.5
  // This is just a hack
  useEffect(() => {
    setTimeout(() => {
      if (window) {
        document.querySelectorAll('ion-icon').forEach((e) => {
          e.shadowRoot &&
            e.shadowRoot.querySelector('svg.icon-tabler') &&
            e.shadowRoot
              .querySelector('svg.icon-tabler')
              .setAttribute('style', 'stroke-width: 1.5');
        });
      }
    }, 500);
  }, []);

  return <IonIcon part="icon" {...rest} />;
};
