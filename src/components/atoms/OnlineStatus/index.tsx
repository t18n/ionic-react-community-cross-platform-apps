import './index.min.css';

import React from 'react';
import { makeClassNames } from 'utils/css';

interface OnlineStatusProps {
  status: 'active' | 'inactive';
  extraClasses?: string;
}

export const OnlineStatus = ({ status, extraClasses }: OnlineStatusProps) => {
  const classNames = `online-status ${status}`;

  return <div className={makeClassNames(classNames, extraClasses)} />;
};
