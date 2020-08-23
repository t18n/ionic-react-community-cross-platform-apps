import './index.min.css';

import { Button } from 'components/atoms/Button';
import { Input } from 'components/atoms/Input';
import { Item } from 'components/atoms/Item';
import { Content } from 'components/atoms/Layout/Content';
import { Col, Row } from 'components/atoms/Layout/Grid';
import { Page } from 'components/atoms/Layout/Page';
import { List } from 'components/atoms/List';
import React from 'react';

export const Welcome = () => {
  const login = () => console.log('logging in');

  return (
    <Page>
      <Content className="bg-primary">
        <div className="tour-login">
          <List inset>
            <Item lines="full">
              <Input type="text" placeholder="Email" />
            </Item>
            <Item lines="none">
              <Input type="password" placeholder="Password" />
            </Item>
          </List>

          <div className="p-all">
            <Button
              className="m--left m--right"
              onClick={login}
              expand="block"
              color="white"
              fill="outline"
            >
              Sign in
            </Button>
          </div>

          <Row>
            <Col>
              <Button fill="clear" color="white" size="small">
                Forgot password?
              </Button>
            </Col>
            <Col className="ion-text-right">
              <Button fill="clear" color="white" size="small">
                Join now
              </Button>
            </Col>
          </Row>
        </div>
      </Content>
    </Page>
  );
};
