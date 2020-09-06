import './index.min.css';

import { IonPage } from '@ionic/react';
import classNames from 'classnames';
import React, { ReactNode } from 'react';

import { Content } from '../Content';

type PageProps = {
  children: ReactNode;
  className?: string;
};

type PageContentProps = {
  children: ReactNode;
  className?: string;
};

export const Page = ({ children, className, ...rest }: PageProps) => {
  return (
    <IonPage className={classNames('page', className)} {...rest}>
      {children}
    </IonPage>
  );
};

export const PageContent = ({ children, className, ...rest }: PageContentProps) => {
  return (
    <Content className={classNames('page__content scroll-y', className)} {...rest}>
      {children}
    </Content>
  );
};
