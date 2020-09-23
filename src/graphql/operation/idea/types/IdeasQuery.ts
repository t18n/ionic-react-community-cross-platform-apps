/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { IdeasInput, IdeaType, CommentType, ReactionType, VoteType, MediumType } from "./../../../../types/graphql-types.gen";

// ====================================================
// GraphQL query operation: IdeasQuery
// ====================================================

export interface IdeasQuery_ideas_items_user {
  __typename: "User";
  name: string;
  slug: string;
  cover: string | null;
}

export interface IdeasQuery_ideas_items_tags {
  __typename: "Tag";
  name: string;
  slug: string;
}

export interface IdeasQuery_ideas_items_comments {
  __typename: "Comment";
  slug: string;
  type: CommentType;
  content: string;
}

export interface IdeasQuery_ideas_items_reactions {
  __typename: "Reaction";
  type: ReactionType;
}

export interface IdeasQuery_ideas_items_votes {
  __typename: "Vote";
  type: VoteType;
}

export interface IdeasQuery_ideas_items_slipboxes {
  __typename: "Slipbox";
  name: string;
  slug: string;
}

export interface IdeasQuery_ideas_items_medium {
  __typename: "Medium";
  type: MediumType;
  slug: string;
}

export interface IdeasQuery_ideas_items {
  __typename: "Idea";
  type: IdeaType;
  slug: string;
  content: string;
  user: IdeasQuery_ideas_items_user | null;
  tags: IdeasQuery_ideas_items_tags[];
  comments: IdeasQuery_ideas_items_comments[] | null;
  reactions: IdeasQuery_ideas_items_reactions[] | null;
  votes: IdeasQuery_ideas_items_votes[] | null;
  slipboxes: IdeasQuery_ideas_items_slipboxes[] | null;
  medium: IdeasQuery_ideas_items_medium | null;
}

export interface IdeasQuery_ideas {
  __typename: "IdeasResponse";
  items: IdeasQuery_ideas_items[];
  hasMore: boolean;
  total: number;
}

export interface IdeasQuery {
  ideas: IdeasQuery_ideas;
}

export interface IdeasQueryVariables {
  data: IdeasInput;
}
