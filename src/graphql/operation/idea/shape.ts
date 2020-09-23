import gql from 'graphql-tag';

// Fragment to share user query
const IDEA_DATA = gql`
  fragment IdeaData on Idea {
    type
    slug
    content
    user {
      name
      slug
      cover
    }
    tags {
      name
      slug
    }
    comments {
      slug
      content
      parentId
      updatedAt
      user {
        name
        slug
        cover
      }
      reactions {
        type
      }
      slipboxes {
        slug
        name
      }
      votes {
        type
      }
    }
    reactions {
      type
    }
    votes {
      type
    }
    slipboxes {
      name
      slug
    }
    medium {
      type
      slug
    }
  }
`;

// Get list of idea
export const IDEAS_QUERY = gql`
  query IdeasQuery($data: IdeasInput!) {
    ideas(data: $data) {
      items {
        ...IdeaData
      }
      hasMore
      total
    }
  }
  ${IDEA_DATA}
`;

// Get list of idea
export const IDEA_QUERY = gql`
  query IdeaQuery($slug: String!) {
    idea(slug: $slug) {
      ...IdeaData
    }
  }
  ${IDEA_DATA}
`;
