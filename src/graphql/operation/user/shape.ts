import gql from 'graphql-tag';

// Fragment to share user query
const USER_DATA = gql`
  fragment UserData on User {
    id
    email
    name
    slug
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
      ...UserData
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
      ...UserData
    }
  }
  ${USER_DATA}
`;
