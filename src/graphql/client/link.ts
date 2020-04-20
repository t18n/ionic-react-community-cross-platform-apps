import { ApolloLink, HttpLink } from '@apollo/client';
import { onError } from '@apollo/link-error';

/**
 * Link
 *
 * Link is the same as middleware, allowing to define how each
 * GraphQL request is handled by your GraphQL client
 */

// HTTP request
const httpLink = (uri: string) => {
  return new HttpLink({
    uri,
    credentials: 'include',
  });
};

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

// Apollo link
export const link = (uri: string) => ApolloLink.from([errorLink, httpLink(uri)]);
