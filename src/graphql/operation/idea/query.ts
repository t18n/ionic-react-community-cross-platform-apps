import { useQuery } from '@apollo/client';

import { IDEA_QUERY, IDEAS_QUERY } from './shape';
import { IdeaQuery_idea, IdeaQueryVariables } from './types/IdeaQuery';
import { IdeasQuery_ideas, IdeasQueryVariables } from './types/IdeasQuery';

/**
 * Types
 */
type IdeaQueryOptions = {
  variables: IdeaQueryVariables;
};

type IdeasQueryOptions = {
  variables: IdeasQueryVariables;
};

/**
 * Fetch one Idea
 */
export const useIdeaQuery = (options: IdeaQueryOptions) => {
  return useQuery<{ idea: IdeaQuery_idea }>(IDEA_QUERY, options);
};

/**
 * Fetch multiple ideas
 */
export const useIdeasQuery = (options: IdeasQueryOptions) => {
  return useQuery<{ ideas: IdeasQuery_ideas }>(IDEAS_QUERY, options);
};
