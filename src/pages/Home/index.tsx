import './index.min.css';

import { Page } from 'components/atoms/Layout/Page';
import { UserContext } from 'context/User';
import { History } from 'history';
import { Explore } from 'pages/Explore';
import { Tour } from 'pages/Tour';
import React from 'react';

type HomeProps = {
  history: History;
};

export const Home = ({ history }: HomeProps) => {
  const { isAuthed } = UserContext.useContainer();

  return <Page>{!isAuthed ? <Tour /> : <Explore history={history} />}</Page>;
};
