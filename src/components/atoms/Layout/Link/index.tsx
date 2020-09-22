import './index.min.css';

import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

/**
 * Types
 */
type LinkProps = {
  children: ReactNode;
  to: string;
  extraClasses?: string;
};

/**
 * Components
 */
export const Link = ({ to, children, extraClasses, ...rest }: LinkProps) => {
  return (
    <RouterLink to={to} {...rest} className={classNames('br-link cursor-pointer', extraClasses)}>
      {children}
    </RouterLink>
  );
};
