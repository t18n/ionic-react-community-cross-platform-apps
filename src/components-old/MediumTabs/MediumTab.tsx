import React, { FC } from 'react';

export interface MediumTabProps {
  hide: boolean;
}

export const MediumTab: FC<MediumTabProps> = ({ hide, children }) => (
  <div className={hide && 'hide'}>{children}</div>
);
