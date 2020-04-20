import { useMutation } from '@apollo/client';

import { LOGIN, LOGOUT } from './shape';
import { LoginMutation, LoginMutationVariables } from './types/LoginMutation';

export const useLoginUser = () => {
  return useMutation<LoginMutation, LoginMutationVariables>(LOGIN);
};

export const useLogoutUser = () => {
  return useMutation(LOGOUT);
};
