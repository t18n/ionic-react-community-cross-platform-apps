import React, { useState } from 'react';

import { Item, ItemDivider } from '../Item';
import { Label } from '../Item';
import { Col, Row } from '../Layout/Grid';
import { List } from '../List';
import { Checkbox } from '.';

const checkboxList = [
  { val: 'Pepperoni', isChecked: true },
  { val: 'Sausage', isChecked: false },
  { val: 'Mushroom', isChecked: false },
];

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const All = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Row>
      <Col size="3" className="flex-column">
        <List>
          <ItemDivider>
            <b>Default Checkbox</b>
          </ItemDivider>
          <Item>
            <Checkbox checked={checked} onIonChange={(e) => setChecked(e.detail.checked)} />
            <br />
            <Label>Checked: {JSON.stringify(checked)}</Label>
          </Item>

          <br />
          <ItemDivider>
            <b>Disabled Checkbox</b>
          </ItemDivider>
          <Item>
            <Checkbox slot="start" disabled={true} />
          </Item>

          <br />
          <ItemDivider>
            <b>Checkbox Colors</b>
          </ItemDivider>
          <Item>
            <Checkbox slot="start" color="primary" />
            <Checkbox slot="start" color="secondary" />
            <Checkbox slot="start" color="danger" />
            <Checkbox slot="start" color="light" />
            <Checkbox slot="start" color="dark" />
          </Item>

          <br />
          <br />
          <ItemDivider>
            <b>Checkboxes in a List</b>
          </ItemDivider>

          {checkboxList.map(({ val, isChecked }, i) => (
            <Item key={i}>
              <Label>{val}</Label>
              <Checkbox slot="end" value={val} checked={isChecked} />
            </Item>
          ))}
        </List>
      </Col>
    </Row>
  );
};
