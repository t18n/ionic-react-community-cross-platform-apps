import gql from 'graphql-tag';

// Fragment to share user query
const MEDIUM_DATA = gql`
  fragment MediumFragment on Medium {
    id
    title
    shortDescription
    type
    slug
    cover
    source
    isbn
    publishedYear
    ideaCount
    commentCount
    reactionCount
    reportCount
    users {
      name
      slug
    }
    tags {
      name
      slug
    }
  }
`;

// Get list of medium
export const MEDIA_QUERY = gql`
  query MediaQuery($first: Int!) {
    media(first: $first) {
      items {
        ...MediumFragment
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
      ...MediumFragment
    }
  }
  ${MEDIUM_DATA}
`;
