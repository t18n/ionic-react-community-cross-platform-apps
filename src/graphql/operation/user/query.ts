import { useQuery } from '@apollo/client';

import { ME } from './shape';
import { MeQuery_me } from './types/MeQuery';

export const useLoggedInUser = () => {
  return useQuery<{ me: MeQuery_me }>(ME);
};
