import { useQuery } from '@apollo/client';

import { MEDIA_QUERY, MEDIUM_QUERY } from './shape';
import { MediaQuery_media, MediaQueryVariables } from './types/MediaQuery';
import { MediumQuery_medium, MediumQueryVariables } from './types/MediumQuery';

/**
 * Medium
 */
type MediaQueryOptions = {
  variables: MediaQueryVariables;
};

type MediumQueryOptions = {
  variables: MediumQueryVariables;
};

/**
 * Fetch list of media
 */
export const useMediaQuery = (options: MediaQueryOptions) => {
  return useQuery<{ media: MediaQuery_media }>(MEDIA_QUERY, options);
};

/**
 * Fetch one medium
 */
export const useMediumQuery = (options: MediumQueryOptions) => {
  return useQuery<{ medium: MediumQuery_medium }>(MEDIUM_QUERY, options);
};
