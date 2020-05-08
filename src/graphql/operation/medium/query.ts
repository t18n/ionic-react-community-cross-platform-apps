import { useQuery } from '@apollo/client';

import { MEDIUM_QUERY, MEDIUMS_QUERY } from './shape';
import { MediumsQuery_mediums, MediumsQuery_mediums_items } from './types/MediumsQuery';

type MediumsQueryOptions = {
  variables: {
    first: number;
  };
};

type MediumQueryOptions = {
  variables: {
    slug: string;
  };
};

/**
 * Fetch list of mediums
 */
export const useMediumsQuery = (options: MediumsQueryOptions) => {
  return useQuery<{ mediums: MediumsQuery_mediums }>(MEDIUMS_QUERY, options);
};

/**
 * Fetch one medium
 */
export const useMediumQuery = (options: MediumQueryOptions) => {
  return useQuery<{ medium: MediumsQuery_mediums_items }>(MEDIUM_QUERY, options);
};
