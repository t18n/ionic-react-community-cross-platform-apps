import { useQuery } from '@apollo/client';
import { ME } from 'graphql/operation/user/shape';
import { MeQuery_me } from 'graphql/operation/user/types/MeQuery';
import { createContainer } from 'unstated-next';

export type UserContextType = {
  isAuthed: boolean;
  me: MeQuery_me;
};

export const useUserContext = (): UserContextType => {
  const queryResult = useQuery<{ me: MeQuery_me }>(ME);
  const isAuthed = !!queryResult?.data?.me;

  return { isAuthed, me: queryResult?.data?.me };
};

export const UserContext = createContainer(useUserContext);
