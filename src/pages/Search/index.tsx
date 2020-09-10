import './index.min.css';

import { t } from '@lingui/macro';
import { Button } from 'components/atoms/Button';
import { icArrowDown, icChevronDown, Icon, icX } from 'components/atoms/Icon';
import { Item, Label } from 'components/atoms/Item';
import { Col } from 'components/atoms/Layout/Grid';
import { Page, PageContent } from 'components/atoms/Layout/Page';
import { SearchBar } from 'components/atoms/SearchBar';
import { Text } from 'components/atoms/Text';
import { Breadcrumb } from 'components/molecules/Breadcrumb';
import ConnectItem from 'components/molecules/ConnectItem';
import { connections } from 'components/molecules/ConnectItem';
import FollowCard from 'components/molecules/FollowCard';
import { follows } from 'components/molecules/FollowCard';
import SearchSuggestions from 'components/organisms/SearchSuggestions';
import { useSearchBar } from 'hooks/useSearchbar';
import { chevronDown } from 'ionicons/icons';
import React from 'react';

import { Row } from '../../components/atoms/Layout/Grid/index';

const Search = () => {
  const { isSearchFocused, onSearchCancel, onSearchChange, searchTerm } = useSearchBar();

  const goToMedium = () => {
    console.log('goToMedium');
  };

  return (
    <Page className="search-page">
      <Breadcrumb title={t`page.title.search`} />

      <PageContent>
        <SearchBar
          className="w-100p mx-auto"
          placeholder={t`label.search`}
          showCancelButton="never"
          onIonClear={onSearchCancel}
          onIonChange={onSearchChange}
          clearIcon={icX}
          debounce={300}
          inputmode="text"
          autocomplete="off"
          animated
        />

        <div className="scroll-x mt-m">
          <Button className="scroll-item" fill="outline" color="medium" size="small">
            Love
          </Button>
          <Button className="scroll-item" fill="outline" color="medium" size="small">
            Romance
          </Button>
          <Button className="scroll-item" fill="outline" color="medium" size="small">
            Thriller
          </Button>
          <Button className="scroll-item" fill="outline" color="medium" size="small">
            Business
          </Button>
          <Button className="scroll-item" fill="outline" color="medium" size="small">
            Education
          </Button>
          <Button className="scroll-item" fill="outline" color="medium" size="small">
            History
            <Icon icon={icChevronDown} />
          </Button>
          <Button className="scroll-item" fill="outline" color="medium" size="small">
            Horor
            <Icon icon={icChevronDown} />
          </Button>
        </div>
        <Item color="light">
          <Label color="medium">
            <div className="text-xs">111,575 results</div>
          </Label>
        </Item>

        <SearchSuggestions isFocused={isSearchFocused} searchTerm={searchTerm} />

        <div className="search-results">
          {follows.map((follow, i) => (
            <FollowCard
              key={i}
              items={follow.items}
              avatar={follow.avatar}
              connectionCount={follow.connectionCount}
              badge={follow.badge}
              firstName={follow.firstName}
              aboutMe={follow.aboutMe}
              timestamp={follow.timestamp}
              location={follow.location}
              onClickDetail={goToMedium}
            />
          ))}
        </div>

        <div className="panel">
          <div className="panel-header">
            <Row>
              <Col>Profiles</Col>
              <Col size="auto">
                <Text as="span" color="primary">
                  <span className="text-sm">
                    <strong>See all</strong>
                  </span>
                </Text>
              </Col>
            </Row>
          </div>
          <div className="panel-body p-0">
            <div className="scroll-x">
              {connections.map((connection, i) => (
                <div className="scroll-item" key={i}>
                  <ConnectItem
                    connectionCount={connection.connectionCount}
                    firstName={connection.firstName}
                    badge={connection.badge}
                    avatar={connection.avatar}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContent>
    </Page>
  );
};

export default Search;
