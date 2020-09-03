/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

export interface MeQuery_me {
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

export interface MeQuery {
  me: MeQuery_me | null;
}
