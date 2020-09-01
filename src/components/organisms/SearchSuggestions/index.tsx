import './index.min.css';

import { Item, Label } from 'components/atoms/Item';
import { Col, Row } from 'components/atoms/Layout/Grid';
import { Avatar } from 'components/atoms/Media';
import faker from 'faker';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { Text } from '../../atoms/Text/index';

interface SearchSuggestionsProps extends RouteComponentProps {
  isFocused: boolean;
  searchTerm: string;
}

const SearchSuggestions = ({ history, isFocused, searchTerm }: SearchSuggestionsProps) => {
  const goToSearch = () => {
    history.push('/search');
  };

  return (
    <div className={!isFocused ? 'hide' : ''}>
      <div className="content-overlay">
        <div className="search-suggestions">
          {[0, 1, 2, 3, 4].map((i) => (
            <div className="search-suggestions__items" key={i} onClick={goToSearch}>
              <Row className="items-center">
                <Col size="auto">
                  <Avatar className="tiny">
                    <img src={faker.image.avatar()} alt="" />
                  </Avatar>
                </Col>
                <Col>
                  <div className="text-sm">
                    <strong>{faker.company.companyName()} </strong>
                    <Text as="span" color="medium">
                      Category: {faker.company.companyName()}
                    </Text>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </div>

        <Item lines="none" onClick={goToSearch}>
          <Label color="primary">
            <div className="text-sm">
              <strong>See all results for {searchTerm}</strong>
            </div>
          </Label>
        </Item>
      </div>
    </div>
  );
};

export default withRouter(SearchSuggestions);
