/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';

import { Item, ItemDivider, Label } from '../Item';
import { Content } from '../Layout/Content';
import { List, ListHeader } from '../List';
import { Radio, RadioGroup } from '.';

export default {
  title: 'Form',
  component: Radio,
};

export const RadioButton = () => {
  const [selected, setSelected] = useState<string>('biff');
  return (
    <Content>
      <List>
        <RadioGroup value={selected} onChange={(e: any) => setSelected(e.detail.value)}>
          <ListHeader>
            <Label>Name</Label>
          </ListHeader>

          <Item>
            <Label>Biff</Label>
            <Radio slot="start" value="biff" />
          </Item>

          <Item>
            <Label>Griff</Label>
            <Radio slot="start" value="griff" />
          </Item>

          <Item>
            <Label>Buford</Label>
            <Radio slot="start" value="buford" />
          </Item>
        </RadioGroup>
        <ItemDivider>Your Selection</ItemDivider>
        <Item>{selected ?? '(none selected'}</Item>
      </List>
    </Content>
  );
};

export const RadioButtonGroup = () => (
  <Content>
    <List>
      <RadioGroup>
        <ListHeader>
          <Label>Auto Manufacturers</Label>
        </ListHeader>

        <Item>
          <Label>Cord</Label>
          <Radio value="cord" />
        </Item>

        <Item>
          <Label>Duesenberg</Label>
          <Radio value="duesenberg" />
        </Item>

        <Item>
          <Label>Hudson</Label>
          <Radio value="hudson" />
        </Item>

        <Item>
          <Label>Packard</Label>
          <Radio value="packard" />
        </Item>

        <Item>
          <Label>Studebaker</Label>
          <Radio value="studebaker" />
        </Item>
      </RadioGroup>
    </List>
  </Content>
);
