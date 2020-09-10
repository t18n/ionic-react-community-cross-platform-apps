import { useMutation } from '@apollo/client';

import { LOGIN, LOGOUT, ME } from './shape';
import { LoginMutation, LoginMutationVariables } from './types/LoginMutation';

export const useLoginUser = () => {
  const [loginUser, { loading }] = useMutation<LoginMutation, LoginMutationVariables>(LOGIN);

  const login = async (email: string, password: string) => {
    return loginUser({
      variables: {
        data: { email, password },
      },
      update(cache, { data: { login } }) {
        // const { me } = cache.readQuery({ query: ME });
        cache.writeQuery({
          query: ME,
          data: { me: login },
        });
      },
    });
  };

  return [login, { loading }] as const;
};

export const useLogoutUser = () => {
  return useMutation(LOGOUT);
};
