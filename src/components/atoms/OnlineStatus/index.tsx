import './index.min.css';

import classNames from 'classnames';
import React from 'react';

interface OnlineStatusProps {
  status: 'active' | 'inactive';
  extraClasses?: string;
}

export const OnlineStatus = ({ status, extraClasses, ...rest }: OnlineStatusProps) => {
  return <div className={classNames(`online-status ${status}`, extraClasses)} {...rest} />;
};
