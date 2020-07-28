import React from 'react';

import { Checkbox } from '../Checkbox';
import { Content } from '../Content';
import { Input } from '../Input';
import { Item, ItemOption, ItemOptionGroup } from '../Item';
import { Label } from '../Item';
import { ItemSliding } from '../Item/index';
import { Radio } from '../Radio/index';
import { Toggle } from '../Toggle';
import { List } from '.';

export default {
  title: 'Item',
  component: Item,
};

export const Example = () => (
  <Content>
    {/*-- List of Text Items --*/}
    <List>
      <Item>
        <Label>Pokémon Yellow</Label>
      </Item>
      <Item>
        <Label>Mega Man X</Label>
      </Item>
      <Item>
        <Label>The Legend of Zelda</Label>
      </Item>
      <Item>
        <Label>Pac-Man</Label>
      </Item>
      <Item>
        <Label>Super Mario World</Label>
      </Item>
    </List>

    {/*-- List of Input Items --*/}
    <List>
      <Item>
        <Label>Input</Label>
        <Input></Input>
      </Item>
      <Item>
        <Label>Toggle</Label>
        <Toggle slot="end"></Toggle>
      </Item>
      <Item>
        <Label>Radio</Label>
        <Radio slot="end"></Radio>
      </Item>
      <Item>
        <Label>Checkbox</Label>
        <Checkbox slot="start" />
      </Item>
    </List>

    {/*-- List of Sliding Items --*/}
    <List>
      <ItemSliding>
        <Item>
          <Label>Item</Label>
        </Item>
        <ItemOptionGroup side="end">
          <ItemOption onClick={() => console.log('hey')}>Unread</ItemOption>
        </ItemOptionGroup>
      </ItemSliding>

      <ItemSliding>
        <Item>
          <Label>Item</Label>
        </Item>
        <ItemOptionGroup side="end">
          <ItemOption onClick={() => console.log('hey')}>Unread</ItemOption>
        </ItemOptionGroup>
      </ItemSliding>
    </List>
  </Content>
);
