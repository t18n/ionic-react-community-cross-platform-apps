import gql from 'graphql-tag';

// Fragment to share user query
const IDEA_DATA = gql`
  fragment IdeaFragment on Idea {
    id
    content
    type
    slug
    commentCount
    reactionCount
    reportCount
    user {
      name
      slug
    }
    medium {
      slug
    }
    slipbox {
      slug
    }
    reactions {
      type
      user {
        name
        slug
      }
    }
  }
`;

// Get list of medium
export const IDEAS_QUERY = gql`
  query IdeasQuery($data: IdeasInput!) {
    ideas(data: $data) {
      items {
        ...IdeaFragment
      }
      hasMore
      total
    }
  }
  ${IDEA_DATA}
`;

// Get list of medium
export const IDEA_QUERY = gql`
  query IdeaQuery($slug: String!) {
    idea(slug: $slug) {
      ...IdeaFragment
    }
  }
  ${IDEA_DATA}
`;
