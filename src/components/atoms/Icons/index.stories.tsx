import React, { useState } from 'react';

import { Col, Row } from '../Grid';
import { ItemDivider } from '../Item';
import { SearchBar } from '../SearchBar';
import * as Icons from '.';

const Icon = Icons.Icon;

export default {
  title: 'Icons',
  component: Icons,
};

export const Default = () => {
  const [searchText, setSearchText] = useState('');

  const isSearchMatch = (str: string) => {
    if (searchText === '') return true;

    return str.search(searchText) >= 0;
  };

  return (
    <>
      <SearchBar
        value={searchText}
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        onIonChange={(e) => setSearchText(e.detail.value!)}
      ></SearchBar>

      <Row>
        <Col>
          <a href="https://tablericons.com/" target="_blank" rel="noopener noreferrer">
            <h4>Find icons</h4>
          </a>
        </Col>
      </Row>

      <Row>
        <ItemDivider>
          <Col>
            <b>Id</b>
          </Col>
          <Col>
            <b>Small</b>
          </Col>
          <Col>
            <b>Default</b>
          </Col>
          <Col>
            <b>Large</b>
          </Col>
        </ItemDivider>
      </Row>

      {/* <Row> */}
      {Object.keys(Icons).map(
        (id) =>
          id !== 'Icon' && (
            <Row key={id} style={{ display: !isSearchMatch(id) && 'none' }}>
              <ItemDivider>
                <Col>{id}</Col>
                <Col>
                  <Icon icon={Icons[id]} />
                </Col>
                <Col>
                  <Icon icon={Icons[id]} size="small" />
                </Col>
                <Col>
                  <Icon icon={Icons[id]} size="large" />
                </Col>
              </ItemDivider>
            </Row>
          )
      )}
    </>
  );
};
