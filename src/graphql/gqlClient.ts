import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

/**
 * Return Graphql client config instance
 *
 * @param  {string} uri? uri of GraphQL server
 */
export const gqlClient = (uri: string | undefined) => {
  if (!uri) {
    throw new Error('Please provide GraphQL uri');
  }

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri,
    }),
  });
};
