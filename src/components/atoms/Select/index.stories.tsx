/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';

import { Item, ItemDivider, Label } from '../Item';
import { Content } from '../Layout/Content';
import { List, ListHeader } from '../List';
import { Select, SelectOption } from '.';

export default {
  title: 'Form',
  component: Select,
};

export const AllSelect = () => {
  const [gender, setGender] = useState<string>();
  const [hairColor, setHairColor] = useState<string>('brown');

  return (
    <Content>
      <List>
        <ListHeader>
          <Label>Single Selection</Label>
        </ListHeader>

        <Item>
          <Label>Gender</Label>
          <Select
            value={gender}
            placeholder="Select One"
            onChange={(e: any) => setGender(e.detail.value)}
          >
            <SelectOption value="female">Female</SelectOption>
            <SelectOption value="male">Male</SelectOption>
          </Select>
        </Item>

        <Item>
          <Label>Hair Color</Label>
          <Select
            value={hairColor}
            okText="Okay"
            cancelText="Dismiss"
            onChange={(e: any) => setHairColor(e.detail.value)}
          >
            <SelectOption value="brown">Brown</SelectOption>
            <SelectOption value="blonde">Blonde</SelectOption>
            <SelectOption value="black">Black</SelectOption>
            <SelectOption value="red">Red</SelectOption>
          </Select>
        </Item>
        <ItemDivider>Your Selections</ItemDivider>
        <Item>Gender: {gender ?? '(none selected)'}</Item>
        <Item>Hair Color: {hairColor}</Item>
      </List>
    </Content>
  );
};
