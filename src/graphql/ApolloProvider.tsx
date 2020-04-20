import { ApolloProvider as Provider } from '@apollo/client';
import React from 'react';
import { FC } from 'react';

import { gqlClient } from './client';

// Export wrapper for Apollo client
export const ApolloProvider: FC = ({ children }) => {
  const client = gqlClient(process.env.REACT_APP_BR_API_HOST);

  return <Provider client={client}>{children}</Provider>;
};
