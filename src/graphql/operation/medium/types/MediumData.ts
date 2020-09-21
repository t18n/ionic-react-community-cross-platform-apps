/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MediumType, CommentType, ReactionType } from "./../../../../types/graphql-types.gen";

// ====================================================
// GraphQL fragment: MediumData
// ====================================================

export interface MediumData_users {
  __typename: "User";
  name: string;
  slug: string;
  cover: string | null;
}

export interface MediumData_tags {
  __typename: "Tag";
  name: string;
  slug: string;
}

export interface MediumData_comments {
  __typename: "Comment";
  id: string;
  type: CommentType;
  content: string;
  rating: number | null;
}

export interface MediumData_reactions {
  __typename: "Reaction";
  id: string;
  type: ReactionType;
}

export interface MediumData_votes {
  __typename: "Vote";
  id: string;
}

export interface MediumData {
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
  users: MediumData_users[] | null;
  tags: MediumData_tags[] | null;
  comments: MediumData_comments[] | null;
  reactions: MediumData_reactions[] | null;
  votes: MediumData_votes[] | null;
  updatedAt: any;
}
