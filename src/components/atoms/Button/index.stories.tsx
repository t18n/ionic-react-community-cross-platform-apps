import React from 'react';

import { BackButton, Button, ButtonGroup } from '../Button';
import { Col, Row } from '../Grid';
import { Text } from '../Text';
import { icCircleCheck, Icon, icSearch, icSquareCheck, icStar, icUser } from '../Text';
import { Alert } from '.';

export default {
  title: 'Alert',
  component: Alert,
};

export const ButtonsExample: React.FC = () => (
  <Row>
    <Col>
      <ButtonGroup slot="start">
        <BackButton defaultHref="/" />
      </ButtonGroup>
      <Text>Back Button</Text>
    </Col>

    <Col>
      <ButtonGroup slot="secondary">
        <Button>
          <Icon slot="icon-only" icon={icUser} />
        </Button>
        <Button>
          <Icon slot="icon-only" icon={icSearch} />
        </Button>
      </ButtonGroup>
      <Text>Default Buttons</Text>
      <ButtonGroup slot="primary">
        <Button color="secondary">
          <Icon slot="icon-only" ios={icCircleCheck} md={icSquareCheck} />
        </Button>
      </ButtonGroup>
    </Col>

    <Col>
      <ButtonGroup slot="primary">
        <Button onClick={() => console.log('hey')}>
          <Icon slot="icon-only" icon={icStar} />
        </Button>
      </ButtonGroup>
      <Text>Right side menu toggle</Text>
      <ButtonGroup slot="end">{/* <IonMenuButton autoHide={false} /> */}</ButtonGroup>
    </Col>

    <Col>
      <ButtonGroup collapse="true">
        <Button>
          <Icon slot="icon-only" icon={icStar} />
        </Button>
      </ButtonGroup>
      <Text>Collapsible Buttons</Text>
    </Col>
  </Row>
);
