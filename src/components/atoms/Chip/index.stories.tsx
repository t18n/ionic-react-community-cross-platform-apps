import React from 'react';

import { Item, ItemDivider } from '../Item';
import { Label } from '../Item';
import { Col, Row } from '../Layout/Grid';
import { Chip } from '.';

export default {
  title: 'Info Badge',
  component: Chip,
};

export const ChipInfo = () => (
  <Row>
    <Col size="1" className="flex-column">
      <ItemDivider>
        <Chip>default</Chip>
      </ItemDivider>
      <ItemDivider>
        <Chip color="primary">primary</Chip>
      </ItemDivider>

      <ItemDivider>
        <Chip color="secondary">secondary</Chip>
      </ItemDivider>

      <ItemDivider>
        <Chip color="tertiary">tertiary</Chip>
      </ItemDivider>

      <ItemDivider>
        <Chip color="success">success</Chip>
      </ItemDivider>

      <ItemDivider>
        <Chip color="warning">warning</Chip>
      </ItemDivider>

      <ItemDivider>
        <Chip color="danger">danger</Chip>
      </ItemDivider>

      <ItemDivider>
        <Chip color="light">light</Chip>
      </ItemDivider>

      <ItemDivider>
        <Chip color="medium">medium</Chip>
      </ItemDivider>

      <ItemDivider>
        <Chip color="dark">dark</Chip>
      </ItemDivider>

      <Item>
        <Chip slot="start">11</Chip>
        <Label>My Item</Label>
        <Chip slot="end">22</Chip>
      </Item>
    </Col>
  </Row>
);
