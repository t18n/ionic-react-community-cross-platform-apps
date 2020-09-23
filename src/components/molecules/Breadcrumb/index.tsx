import './index.min.css';

import { ButtonBack, ButtonGroup, ButtonMenu } from 'components/atoms/Button';
import { icArrowLeftCircle, icDiamond, icMenu, Icon } from 'components/atoms/Icon';
import { Header } from 'components/atoms/Layout/Header';
import { Toolbar } from 'components/atoms/Layout/Toolbar';
import { Text } from 'components/atoms/Text';
import React from 'react';

interface BreadcrumbProps {
  title: string;
}

export const Breadcrumb = ({ title }: BreadcrumbProps) => (
  <Header className="header">
    <Toolbar className="flex items-center header__content pr-s pl-s">
      <ButtonGroup slot="start">
        <ButtonMenu autoHide menu="left-sidebar">
          <Icon src={icMenu} color="primary" />
        </ButtonMenu>
        <ButtonBack icon={icArrowLeftCircle} className="ml-s header__button--back" />
      </ButtonGroup>

      <Text
        as="div"
        color="light"
        type="subtitle-l"
        fontWeight="text-bold"
        extraClasses="w-100p text-center"
      >
        {title}
      </Text>

      <ButtonGroup slot="end">
        <ButtonMenu autoHide menu="right-sidebar">
          <Icon src={icDiamond} color="primary" />
        </ButtonMenu>
      </ButtonGroup>
    </Toolbar>
  </Header>
);
