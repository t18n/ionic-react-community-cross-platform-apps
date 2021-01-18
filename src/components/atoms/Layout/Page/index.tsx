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
  omitPadding?: boolean;
};

export const Page = ({ children, className, ...rest }: PageProps) => {
  return (
    <IonPage className={classNames('page', className)} {...rest}>
      {children}
    </IonPage>
  );
};

export const PageContent = ({ children, className, omitPadding, ...rest }: PageContentProps) => {
  const padding = omitPadding ? '' : 'p-page-x p-page-y';

  return (
    <Content className={classNames('scroll-y', className, padding)} {...rest}>
      {children}
    </Content>
  );
};
