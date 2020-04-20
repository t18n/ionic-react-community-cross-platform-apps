import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import { cache } from './cache';
import { link } from './link';

/**
 * Return Graphql client config instance
 *
 * @param  {string} uri? uri of GraphQL server
 */
export const gqlClient = (uri: string) => {
  if (!uri) {
    throw new Error('Please provide GraphQL uri');
  }

  /**
   * Initialize Apollo client
   */
  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: link(uri),
    cache,
  });

  return client;
};
