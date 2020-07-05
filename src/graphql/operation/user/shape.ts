import gql from 'graphql-tag';

// Fragment to share user query
const USER_DATA = gql`
  fragment UserFragment on User {
    id
    email
    name
    slug
    cover
    firstName
    lastName
    createdAt
    updatedAt
  }
`;

// Perform Login mutation
export const LOGIN = gql`
  mutation LoginMutation($data: LoginInput!) {
    login(data: $data) {
      ...UserFragment
    }
  }
  ${USER_DATA}
`;

// Perform Logout mutation
export const LOGOUT = gql`
  mutation LogoutMutation {
    logout
  }
`;

// Get logged in user data
export const ME = gql`
  query MeQuery {
    me {
      ...UserFragment
    }
  }
  ${USER_DATA}
`;
