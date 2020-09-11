/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MediumType, CommentType, ReactionType } from "./../../../../types/graphql-types.gen";

// ====================================================
// GraphQL query operation: MediumQuery
// ====================================================

export interface MediumQuery_medium_users {
  __typename: "User";
  name: string;
  slug: string;
  cover: string | null;
}

export interface MediumQuery_medium_tags {
  __typename: "Tag";
  name: string;
  slug: string;
}

export interface MediumQuery_medium_comments {
  __typename: "Comment";
  id: string;
  type: CommentType;
  content: string;
  rating: number | null;
}

export interface MediumQuery_medium_reactions {
  __typename: "Reaction";
  id: string;
  type: ReactionType;
}

export interface MediumQuery_medium_reports {
  __typename: "Report";
  id: string;
}

export interface MediumQuery_medium {
  __typename: "Medium";
  id: string;
  title: string;
  shortDescription: string;
  type: MediumType;
  slug: string;
  cover: string | null;
  source: string | null;
  isbn: string | null;
  publishedYear: number | null;
  users: MediumQuery_medium_users[] | null;
  tags: MediumQuery_medium_tags[] | null;
  comments: MediumQuery_medium_comments[] | null;
  reactions: MediumQuery_medium_reactions[] | null;
  reports: MediumQuery_medium_reports[] | null;
  updatedAt: any;
}

export interface MediumQuery {
  medium: MediumQuery_medium;
}

export interface MediumQueryVariables {
  slug: string;
}
