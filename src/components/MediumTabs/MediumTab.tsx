import React, { ReactNode } from 'react';

export interface MediumTabProps {
  hide: boolean;
  children?: ReactNode;
}

export const MediumTab = ({ hide, children }: MediumTabProps) => (
  <div className={hide && 'hide'}>{children}</div>
);
