import { useQuery } from '@apollo/client';

import { MEDIA_QUERY, MEDIUM_QUERY } from './shape';
import { MediaQuery_media } from './types/MediaQuery';
import { MediumQuery_medium } from './types/MediumQuery';

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
  return useQuery<{ media: MediaQuery_media }>(MEDIA_QUERY, options);
};

/**
 * Fetch one medium
 */
export const useMediumQuery = (options: MediumQueryOptions) => {
  return useQuery<{ medium: MediumQuery_medium }>(MEDIUM_QUERY, options);
};
