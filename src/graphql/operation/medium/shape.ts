import gql from 'graphql-tag';

// Fragment to share user query
const MEDIUM_DATA = gql`
  fragment MediumData on Medium {
    id
    title
    shortDescription
    type
    slug
    cover
    source
    isbn
    publishedDate
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
export const MEDIUMS_QUERY = gql`
  query MediumsQuery($first: Int!) {
    mediums(first: $first) {
      items {
        ...MediumData
      }
      hasMore
      total
    }
  }
  ${MEDIUM_DATA}
`;

// Get list of medium
export const MEDIUM_QUERY = gql`
  query MediumQuery($slug: String!) {
    medium(slug: $slug) {
      ...MediumData
    }
  }
  ${MEDIUM_DATA}
`;
