import faker from 'faker';
import React from 'react';

import { Chip } from '../Chip';
import { Item } from '../Item';
import { Label } from '../Item';
import { Col, Row } from '../Layout/Grid';
import { List } from '../List';
import { Avatar, Img, Thumbnail } from '.';

export default {
  title: 'Media',
  component: Avatar,
};

export const MediaAvatar = () => (
  <Row>
    <Col size="2" className="flex-column">
      <Avatar>
        <img src={faker.image.avatar()} />
      </Avatar>

      <Chip>
        <Avatar>
          <img src={faker.image.avatar()} />
        </Avatar>
        <Label>Chip Avatar</Label>
      </Chip>

      <Item>
        <Avatar slot="start">
          <img src={faker.image.avatar()} />
        </Avatar>
        <Label>Item Avatar</Label>
      </Item>
    </Col>
  </Row>
);

/**
 * Img
 */
type Item = {
  src: string;
  text: string;
};

const items: Item[] = [{ src: faker.image.nature(), text: 'a picture of nature' }];

export const MediaImg = () => (
  <Row>
    <List>
      {items.map((image, i) => (
        <Item key={i}>
          <Thumbnail slot="start">
            <Img src={image.src} />
          </Thumbnail>
          <Label>{image.text}</Label>
        </Item>
      ))}
    </List>
  </Row>
);

export const MediaThumbnail = () => (
  <Row>
    <Col size="3" className="flex-column">
      <Thumbnail>
        <img src={faker.image.city()} />
      </Thumbnail>

      <Item>
        <Thumbnail slot="start">
          <img src={faker.image.city()} />
        </Thumbnail>
        <Label>Item Thumbnail</Label>
      </Item>
    </Col>
  </Row>
);
