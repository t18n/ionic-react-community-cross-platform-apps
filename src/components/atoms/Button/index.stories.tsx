import React, { useState } from 'react';

import { icHome, Icon, icStar } from '../Icon';
import { Item, ItemDivider, Label } from '../Item';
import { Content } from '../Layout/Content';
import { Row } from '../Layout/Grid';
import { Toolbar } from '../Layout/Toolbar';
import { List } from '../List';
import { Button, ButtonGroup, Toggle } from '.';
import { ButtonBack } from './index';

export default {
  title: 'Button',
  component: Button,
};

export const Independent = () => (
  <>
    <Row>
      {/*-- Default --*/}
      <Button>Default</Button>

      {/*-- Anchor --*/}
      <Button href="#">Anchor</Button>

      {/*-- Colors --*/}
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="tertiary">Tertiary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
      <Button color="light">Light</Button>
      <Button color="medium">Medium</Button>
      <Button color="dark">Dark</Button>
    </Row>

    <Row>
      {/*-- Expand --*/}
      <Button expand="full">Full Button</Button>
      <Button expand="block">Block Button</Button>
    </Row>

    {/*-- Round --*/}
    <Row>
      <Button shape="round">Round Button</Button>
      <Button shape="round">
        <Icon slot="icon-only" icon={icStar} />
      </Button>
    </Row>

    {/*-- Fill --*/}
    <Row>
      <Button expand="full" fill="outline">
        Outline + Full
      </Button>
      <Button expand="block" fill="outline">
        Outline + Block
      </Button>
      <Button shape="round" fill="outline">
        Outline + Round
      </Button>
    </Row>

    {/*-- Icons --*/}
    <Row>
      <Button>
        <Icon slot="start" icon={icStar} />
        Left Icon
      </Button>
      <Button>
        Right Icon
        <Icon slot="end" icon={icStar} />
      </Button>
      <Button>
        <Icon slot="icon-only" icon={icStar} />
      </Button>
    </Row>

    {/*-- Sizes --*/}
    <Row>
      <Button size="large">Large</Button>
      <Button>Default</Button>
      <Button size="small">Small</Button>
    </Row>
  </>
);

export const InToolbar = () => (
  <>
    <Toolbar>
      <ButtonBack defaultHref="/" />

      <ButtonGroup slot="end">
        <Button onClick={() => console.log('hey')}>
          <Icon slot="icon-only" icon={icHome} />
        </Button>
      </ButtonGroup>

      <ButtonGroup collapse>
        <Button>
          <Icon slot="icon-only" icon={icStar} />
        </Button>
      </ButtonGroup>
    </Toolbar>
  </>
);

export const Toggles = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Content>
      <List>
        <ItemDivider>Default Toggle</ItemDivider>
        <Item>
          <Label>Checked: {JSON.stringify(checked)}</Label>
          <Toggle checked={checked} onChange={(e: any) => setChecked(e.detail.checked)} />
        </Item>

        <ItemDivider>Disabled Toggle</ItemDivider>
        <Item>
          <Toggle disabled />
        </Item>

        <ItemDivider>Checked Toggle</ItemDivider>
        <Item>
          <Toggle checked />
        </Item>

        <ItemDivider>Toggle Colors</ItemDivider>
        <Item>
          <Toggle color="primary" />
        </Item>
        <Item>
          <Toggle color="secondary" />
        </Item>
        <Item>
          <Toggle color="danger" />
        </Item>
        <Item>
          <Toggle color="light" />
        </Item>
        <Item>
          <Toggle color="dark" />
        </Item>

        <ItemDivider>Toggles in a List</ItemDivider>
        <Item>
          <Label>Pepperoni</Label>
          <Toggle value="pepperoni" />
        </Item>

        <Item>
          <Label>Sausage</Label>
          <Toggle value="sausage" disabled={true} />
        </Item>

        <Item>
          <Label>Mushrooms</Label>
          <Toggle value="mushrooms" />
        </Item>
      </List>
    </Content>
  );
};
