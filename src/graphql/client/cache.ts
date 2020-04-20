import { InMemoryCache } from '@apollo/client';

/**
 * Cache
 *
 * InMemoryCache is a normalized data store that is used to speed up
 * the execution of queries that don't rely on real-time data.
 * This allow us to eliminate global store like Redux
 */
export const cache = new InMemoryCache();
