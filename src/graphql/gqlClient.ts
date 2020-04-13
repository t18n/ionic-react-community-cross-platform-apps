import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/link-error';

/**
 * Return Graphql client config instance
 *
 * @param  {string} uri? uri of GraphQL server
 */
export const gqlClient = (uri: string) => {
  if (!uri) {
    throw new Error('Please provide GraphQL uri');
  }

  // HTTP request
  const httpLink = new HttpLink({
    uri,
    credentials: 'include',
  });

  // Error handler
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) => {
        const codeLocation = JSON.stringify(locations);
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${codeLocation}, Path: ${path}`
        );
      });
    if (networkError) console.error(`[Network error]: ${networkError}`);
  });

  return new ApolloClient({
    // Link is the same as middleware, allowing to define how each
    // GraphQL request is handled by your GraphQL client
    link: ApolloLink.from([errorLink, httpLink]),

    // InMemoryCache is a normalized data store that is used to speed up
    // the execution of queries that don't rely on real-time data.
    // This allow us to eliminate global store like Redux
    cache: new InMemoryCache(),
  });
};
