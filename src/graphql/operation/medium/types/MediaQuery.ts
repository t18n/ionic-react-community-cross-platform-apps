/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MediumType, LanguageType, CommentType, ReactionType, IdeaType } from "./../../../../types/graphql-types.gen";

// ====================================================
// GraphQL query operation: MediaQuery
// ====================================================

export interface MediaQuery_media_items_users {
  __typename: "User";
  name: string;
  slug: string;
  cover: string | null;
}

export interface MediaQuery_media_items_tags {
  __typename: "Tag";
  name: string;
  slug: string;
}

export interface MediaQuery_media_items_comments {
  __typename: "Comment";
  id: string;
  type: CommentType;
  content: string;
  rating: number | null;
}

export interface MediaQuery_media_items_reactions {
  __typename: "Reaction";
  id: string;
  type: ReactionType;
}

export interface MediaQuery_media_items_votes {
  __typename: "Vote";
  id: string;
}

export interface MediaQuery_media_items_slipboxes {
  __typename: "Slipbox";
  name: string;
  slug: string;
}

export interface MediaQuery_media_items_ideas_user {
  __typename: "User";
  name: string;
  slug: string;
}

export interface MediaQuery_media_items_ideas {
  __typename: "Idea";
  type: IdeaType;
  slug: string;
  content: string;
  user: MediaQuery_media_items_ideas_user | null;
}

export interface MediaQuery_media_items {
  __typename: "Medium";
  id: string;
  title: string;
  shortDescription: string;
  type: MediumType;
  language: LanguageType;
  slug: string;
  cover: string | null;
  source: string | null;
  isbn: string | null;
  publishedYear: number | null;
  users: MediaQuery_media_items_users[] | null;
  tags: MediaQuery_media_items_tags[] | null;
  comments: MediaQuery_media_items_comments[] | null;
  reactions: MediaQuery_media_items_reactions[] | null;
  votes: MediaQuery_media_items_votes[] | null;
  slipboxes: MediaQuery_media_items_slipboxes[];
  ideas: MediaQuery_media_items_ideas[] | null;
  updatedAt: any;
}

export interface MediaQuery_media {
  __typename: "MediaResponse";
  items: MediaQuery_media_items[];
  hasMore: boolean;
  total: number;
}

export interface MediaQuery {
  media: MediaQuery_media;
}

export interface MediaQueryVariables {
  first: number;
}
