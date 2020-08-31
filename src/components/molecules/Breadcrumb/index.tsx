import { t } from '@lingui/macro';
import { Button, ButtonBack, ButtonGroup } from 'components/atoms/Button';
import { icArrowsMaximize, Icon, icX } from 'components/atoms/Icon';
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
  <Header>
    <Toolbar color="primary flex items-center">
      <ButtonGroup slot="start">
        <ButtonBack />

        <Text as="h5" extraClasses="ml-m">
          {title}
        </Text>
      </ButtonGroup>

      {!!searchBar && (
        <SearchBar
          className="w-m mx-auto"
          placeholder={t`search`}
          showCancelButton="never"
          onIonClear={searchBar.onSearchCancel}
          onIonChange={searchBar.onSearchChange}
          clearIcon={icX}
          debounce={300}
          inputmode="text"
          autocomplete="off"
          animated
        />
      )}

      <ButtonGroup slot="end" className="mr-m p-0">
        <Button>
          <Icon slot="icon-only" icon={icArrowsMaximize} size="tiny" />
        </Button>
      </ButtonGroup>
    </Toolbar>
  </Header>
);
