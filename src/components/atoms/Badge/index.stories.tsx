import React from 'react';

import { Item, ItemDivider, Label } from '../Item';
import { Col, Row } from '../Layout/Grid';
import { Badge } from '.';

export default {
  title: 'Info Badge',
  component: Badge,
};

export const BadgeInfo = () => (
  <Row>
    <Col size="1" className="flex-column">
      <ItemDivider>
        <Badge>default</Badge>
      </ItemDivider>
      <ItemDivider>
        <Badge color="primary">primary</Badge>
      </ItemDivider>

      <ItemDivider>
        <Badge color="secondary">secondary</Badge>
      </ItemDivider>

      <ItemDivider>
        <Badge color="tertiary">tertiary</Badge>
      </ItemDivider>

      <ItemDivider>
        <Badge color="success">success</Badge>
      </ItemDivider>

      <ItemDivider>
        <Badge color="warning">warning</Badge>
      </ItemDivider>

      <ItemDivider>
        <Badge color="danger">danger</Badge>
      </ItemDivider>

      <ItemDivider>
        <Badge color="light">light</Badge>
      </ItemDivider>

      <ItemDivider>
        <Badge color="medium">medium</Badge>
      </ItemDivider>

      <ItemDivider>
        <Badge color="dark">dark</Badge>
      </ItemDivider>

      <Item>
        <Badge slot="start">11</Badge>
        <Label>My Item</Label>
        <Badge slot="end">22</Badge>
      </Item>
    </Col>
  </Row>
);
