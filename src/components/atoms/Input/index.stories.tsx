/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';

import { Item, ItemDivider, Label } from '../Item';
import { Content } from '../Layout/Content';
import { List } from '../List';
import { Input, Textarea } from '.';

export default {
  title: 'Form',
};

export const AllInput: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  return (
    <Content>
      <List>
        <ItemDivider>Default Input with Placeholder</ItemDivider>
        <Item>
          <Input
            value={text}
            placeholder="Enter Input"
            onChange={(e: any) => setText(e.detail.value!)}
          ></Input>
        </Item>

        <ItemDivider>Input with clear button when there is a value</ItemDivider>
        <Item>
          <Input
            value={text}
            placeholder="Enter Input"
            onChange={(e: any) => setText(e.detail.value!)}
            clearInput
          ></Input>
        </Item>

        <ItemDivider>Number type input</ItemDivider>
        <Item>
          <Input
            type="number"
            value={number}
            placeholder="Enter Number"
            onChange={(e: any) => setNumber(parseInt(e.detail.value!, 10))}
          ></Input>
        </Item>

        <ItemDivider>Disabled input</ItemDivider>
        <Item>
          <Input value={text} disabled></Input>
        </Item>

        <ItemDivider>Readonly input</ItemDivider>
        <Item>
          <Input value={text} readonly></Input>
        </Item>

        <ItemDivider>Inputs with labels</ItemDivider>

        <Item>
          <Label>Default Label</Label>
          <Input></Input>
        </Item>

        <Item>
          <Label position="floating">Floating Label</Label>
          <Input value={text}></Input>
        </Item>

        <Item>
          <Label position="fixed">Fixed Label</Label>
          <Input value={text}></Input>
        </Item>

        <Item>
          <Label position="stacked">Stacked Label</Label>
          <Input value={text}> </Input>
        </Item>
      </List>
    </Content>
  );
};

export const AllTextarea: React.FC = () => {
  const [text, setText] = useState<string>();

  return (
    <Content>
      <List>
        <ItemDivider>Default textarea</ItemDivider>
        <Item>
          <Textarea value={text} onChange={(e: any) => setText(e.detail.value!)}></Textarea>
        </Item>

        <ItemDivider>Textarea in an item with a placeholder</ItemDivider>
        <Item>
          <Textarea
            placeholder="Enter more information here..."
            value={text}
            onChange={(e: any) => setText(e.detail.value!)}
          ></Textarea>
        </Item>

        <ItemDivider>Textarea in an item with a floating label</ItemDivider>
        <Item>
          <Label position="floating">Description</Label>
          <Textarea value={text} onChange={(e: any) => setText(e.detail.value!)}></Textarea>
        </Item>

        <ItemDivider>Disabled and readonly textarea in an item with a stacked label</ItemDivider>
        <Item>
          <Label position="stacked">Summary</Label>
          <Textarea
            disabled
            readonly
            value={text}
            onChange={(e: any) => setText(e.detail.value!)}
          ></Textarea>
        </Item>

        <ItemDivider>Textarea that clears the value on edit</ItemDivider>
        <Item>
          <Label>Comment</Label>
          <Textarea
            clearOnEdit={true}
            value={text}
            onChange={(e: any) => setText(e.detail.value!)}
          ></Textarea>
        </Item>

        <ItemDivider>Textarea with custom number of rows and cols</ItemDivider>
        <Item>
          <Label>Notes</Label>
          <Textarea
            rows={6}
            cols={20}
            placeholder="Enter any notes here..."
            value={text}
            onChange={(e: any) => setText(e.detail.value!)}
          ></Textarea>
        </Item>
      </List>
    </Content>
  );
};
