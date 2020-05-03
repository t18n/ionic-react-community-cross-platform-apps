import gql from 'graphql-tag';

// Fragment to share user query
const MEDIUM_DATA = gql`
  fragment MediumData on Medium {
    id
    title
    type
    slug
    cover
    source
    isbn
    users {
      name
      slug
    }
    tags {
      name
      slug
    }
    category {
      name
      slug
    }
    comments {
      id
      type
      content
      rating
    }
    reactions {
      id
      type
    }
  }
`;

// Get list of medium
export const MEDIUMS = gql`
  query MediumsQuery {
    mediums {
      ...MediumData
    }
  }
  ${MEDIUM_DATA}
`;
