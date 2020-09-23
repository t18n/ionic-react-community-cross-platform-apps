import gql from 'graphql-tag';

// Fragment to share user query
const MEDIUM_DATA = gql`
  fragment MediumData on Medium {
    id
    title
    shortDescription
    type
    language
    slug
    cover
    source
    isbn
    publishedYear
    users {
      name
      slug
      cover
    }
    tags {
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
    votes {
      id
    }
    slipboxes {
      name
      slug
    }
    ideas {
      type
      slug
      content
      # user {
      #   name
      #   slug
      # }
    }
    updatedAt
  }
`;

// Get list of medium
export const MEDIA_QUERY = gql`
  query MediaQuery($first: Int!) {
    media(first: $first) {
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
