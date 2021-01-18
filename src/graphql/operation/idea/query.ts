import { useQuery } from '@apollo/client';

import { IDEA_QUERY, IDEAS_QUERY } from './shape';
import { IdeaQuery_idea, IdeaQueryVariables } from './types/IdeaQuery';
import { IdeasQuery_ideas, IdeasQueryVariables } from './types/IdeasQuery';

type IdeasQueryOptions = {
  variables: IdeasQueryVariables;
};

type IdeaQueryOptions = {
  variables: IdeaQueryVariables;
};

/**
 * Fetch list of mediums
 */
export const useIdeasQuery = (options: IdeasQueryOptions) => {
  return useQuery<{ ideas: IdeasQuery_ideas }>(IDEAS_QUERY, options);
};

/**
 * Fetch one medium
 */
export const useIdeaQuery = (options: IdeaQueryOptions) => {
  return useQuery<{ idea: IdeaQuery_idea }>(IDEA_QUERY, options);
};
