import './index.min.css';

import { Page } from 'components/atoms/Layout/Page';
import { UserContext } from 'context/User';
import { Explore } from 'pages/Explore';
import { Tour } from 'pages/Tour';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface HomeProps extends RouteComponentProps {}

export const Home = ({ ...rest }: HomeProps) => {
  const { isAuthed } = UserContext.useContainer();

  return <Page>{!isAuthed ? <Tour {...rest} /> : <Explore {...rest} />}</Page>;
};
