import { useQuery } from '@apollo/client';

import { ME } from './shape';
import { MeQuery_me } from './types/MeQuery';

export const useLoggedInUser = () => {
  const queryResult = useQuery<{ me: MeQuery_me }>(ME);
  const isAuthed = !!queryResult?.data?.me;

  return {
    ...queryResult,
    isAuthed,
  };
};
