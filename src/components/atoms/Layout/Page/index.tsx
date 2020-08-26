import { IonPage } from '@ionic/react';
import { Button, ButtonBack, ButtonGroup } from 'components/atoms/Button';
import { icArrowsMaximize, Icon } from 'components/atoms/Icon';
import React, { ReactNode } from 'react';

import { Text } from '../../Text/index';
import { Header } from '../Header/index';
import { Toolbar } from '../Toolbar/index';

type PageProps = {
  children: ReactNode;
  title: string;
  noBreadcrumb?: boolean;
};

export const Page = ({ title, children, noBreadcrumb }: PageProps) => {
  return (
    <IonPage>
      {!noBreadcrumb && (
        <Header>
          <Toolbar color="primary">
            <ButtonGroup slot="start">
              <ButtonBack defaultHref="/messaging" />
            </ButtonGroup>

            <Text>
              <h6 className="p-0 m-0 medium-title">{title}</h6>
            </Text>

            <ButtonGroup slot="end">
              <Button>
                <Icon slot="icon-only" icon={icArrowsMaximize} size="small" />
              </Button>
            </ButtonGroup>
          </Toolbar>
        </Header>
      )}

      {children}
    </IonPage>
  );
};
