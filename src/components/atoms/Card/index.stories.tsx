import React from 'react';

import { Button } from '../Button';
import { icAdjustments, icAlien, icBasket, icMapPin, Icon, icWifi } from '../Icons';
import { Item } from '../Item';
import { Label } from '../Item';
import { Col, Row } from '../Layout/Grid';
import { Card, CardContent, CardHeader, CardSubtitle, CardTitle } from '.';

export default {
  title: 'Card',
  component: Card,
};

export const All = () => (
  <Row>
    <Col size="4">
      <Card>
        <CardHeader>
          <CardSubtitle>Card Subtitle</CardSubtitle>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>

        <CardContent>
          Keep close to Natures heart... and break clear away, once in awhile, and climb a mountain
          or spend a week in the woods. Wash your spirit clean.
        </CardContent>
      </Card>

      <Card>
        <Item>
          <Icon icon={icMapPin} slot="start" />
          <Label>ion-item in a card, icon left, button right</Label>
          <Button fill="outline" slot="end">
            View
          </Button>
        </Item>

        <CardContent>
          This is content, without any paragraph or header tags, within an ion-cardContent element.
        </CardContent>
      </Card>

      <Card>
        <Item className="ion-activated">
          <Icon icon={icWifi} slot="start" />
          <Label>Card Link Item 1 activated</Label>
        </Item>

        <Item>
          <Icon icon={icAlien} slot="start" />
          <Label>Card Link Item 2</Label>
        </Item>

        <Item className="ion-activated">
          <Icon icon={icAdjustments} slot="start" />
          <Label>Card Button Item 1 activated</Label>
        </Item>

        <Item>
          <Icon icon={icBasket} slot="start" />
          <Label>Card Button Item 2</Label>
        </Item>
      </Card>
    </Col>
  </Row>
);
