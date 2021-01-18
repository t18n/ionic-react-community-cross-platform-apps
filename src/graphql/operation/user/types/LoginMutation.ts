/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginInput } from "./../../../../types/graphql-types.gen";

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login {
  __typename: "User";
  id: string;
  email: string;
  name: string;
  slug: string;
  cover: string | null;
  firstName: string;
  lastName: string | null;
  createdAt: any;
  updatedAt: any;
}

export interface LoginMutation {
  login: LoginMutation_login | null;
}

export interface LoginMutationVariables {
  data: LoginInput;
}
