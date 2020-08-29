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
    <Toolbar color="primary">
      <ButtonGroup slot="start">
        <ButtonBack />

        <Text className="ml-m">
          <h6 className="p-0 m-0 medium-title">{title}</h6>
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

      <ButtonGroup slot="end">
        <Button>
          <Icon slot="icon-only" icon={icArrowsMaximize} size="small" />
        </Button>
      </ButtonGroup>
    </Toolbar>
  </Header>
);
