import React from 'react';

import { Row } from '../Layout/Grid';
import { Logo as LogoComponent } from '.';

export default {
  title: 'Standard',
  component: LogoComponent,
};

export const Logo = () => (
  <Row>
    <LogoComponent width={200} />
  </Row>
);
