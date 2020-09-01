import './index.min.css';

import { IonPage } from '@ionic/react';
import classNames from 'classnames';
import React, { ReactNode } from 'react';

type PageProps = {
  children: ReactNode;
  className?: string;
};

type PageContentProps = {
  children: ReactNode;
  className?: string;
};

export const Page = ({ children, className }: PageProps) => {
  return <IonPage className={classNames('page', className)}>{children}</IonPage>;
};

export const PageContent = ({ children, className }: PageContentProps) => {
  return <div className={classNames('page__content scroll-y', className)}>{children}</div>;
};
