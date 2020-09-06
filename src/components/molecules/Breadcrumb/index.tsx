import './index.min.css';

import { t } from '@lingui/macro';
import { ButtonBack, ButtonGroup, ButtonMenu } from 'components/atoms/Button';
import { icArrowLeftCircle, icDiamond, icMenu, Icon, icX } from 'components/atoms/Icon';
import { Header } from 'components/atoms/Layout/Header';
import { Toolbar } from 'components/atoms/Layout/Toolbar';
import { Text } from 'components/atoms/Text';
import React from 'react';

import { SearchBar } from '../../atoms/SearchBar';

type SearchBox = {
  onSearchChange: (e?: any) => void;
  onSearchCancel: (e?: any) => void;
};

interface BreadcrumbProps {
  title: string;
  searchBar?: SearchBox;
}

export const Breadcrumb = ({ title, searchBar }: BreadcrumbProps) => (
  <Header className="header">
    <Toolbar className="flex items-center header__content pr-s pl-s">
      <ButtonGroup slot="start">
        <ButtonMenu autoHide menu="left-sidebar">
          <Icon src={icMenu} color="primary" />
        </ButtonMenu>
        <ButtonBack icon={icArrowLeftCircle} className="ml-s header__button--back" />
      </ButtonGroup>

      <Text as="div" type="subtitle-l" fontWeight="text-bold" extraClasses="w-100p text-center">
        {title}
      </Text>

      {/* 
      {!!searchBar && (
        <SearchBar
          className="w-m mx-auto"
          placeholder={t`label.search`}
          showCancelButton="never"
          onIonClear={searchBar.onSearchCancel}
          onIonChange={searchBar.onSearchChange}
          clearIcon={icX}
          debounce={300}
          inputmode="text"
          autocomplete="off"
          animated
        />
      )} */}

      <ButtonGroup slot="end">
        <ButtonMenu autoHide menu="right-sidebar">
          <Icon src={icDiamond} color="primary" />
        </ButtonMenu>
      </ButtonGroup>
    </Toolbar>
  </Header>
);
