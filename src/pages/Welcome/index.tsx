import './index.min.css';

import { IonPage } from '@ionic/react';
import { Button } from 'components/atoms/Button';
import { Input } from 'components/atoms/Input';
import { Item } from 'components/atoms/Item';
import { Content } from 'components/atoms/Layout/Content';
import { Col, Row } from 'components/atoms/Layout/Grid';
import { List } from 'components/atoms/List';
import React from 'react';

type WelcomeProps = {};

export const Welcome = (props: WelcomeProps) => {
  const login = () => console.log('logging in');

  return (
    <IonPage>
      <Content className="bg-primary">
        <div className="landing-login">
          <List inset>
            <Item lines="full">
              <Input type="text" placeholder="Email" />
            </Item>
            <Item lines="none">
              <Input type="password" placeholder="Password" />
            </Item>
          </List>

          <div className="ion-padding">
            <Button
              className="ion-margin-left ion-margin-right"
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
    </IonPage>
  );
};