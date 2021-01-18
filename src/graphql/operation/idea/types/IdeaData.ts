/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { IdeaType, ReactionType, VoteType, MediumType } from "./../../../../types/graphql-types.gen";

// ====================================================
// GraphQL fragment: IdeaData
// ====================================================

export interface IdeaData_user {
  __typename: "User";
  name: string;
  slug: string;
  cover: string | null;
}

export interface IdeaData_tags {
  __typename: "Tag";
  name: string;
  slug: string;
}

export interface IdeaData_comments_user {
  __typename: "User";
  name: string;
  slug: string;
  cover: string | null;
}

export interface IdeaData_comments_reactions {
  __typename: "Reaction";
  type: ReactionType;
}

export interface IdeaData_comments_slipboxes {
  __typename: "Slipbox";
  slug: string;
  name: string;
}

export interface IdeaData_comments_votes {
  __typename: "Vote";
  type: VoteType;
}

export interface IdeaData_comments {
  __typename: "Comment";
  slug: string;
  content: string;
  parentId: number | null;
  updatedAt: any;
  user: IdeaData_comments_user;
  reactions: IdeaData_comments_reactions[] | null;
  slipboxes: IdeaData_comments_slipboxes[] | null;
  votes: IdeaData_comments_votes[] | null;
}

export interface IdeaData_reactions {
  __typename: "Reaction";
  type: ReactionType;
}

export interface IdeaData_votes {
  __typename: "Vote";
  type: VoteType;
}

export interface IdeaData_slipboxes {
  __typename: "Slipbox";
  name: string;
  slug: string;
}

export interface IdeaData_medium {
  __typename: "Medium";
  type: MediumType;
  slug: string;
}

export interface IdeaData {
  __typename: "Idea";
  type: IdeaType;
  slug: string;
  content: string;
  user: IdeaData_user | null;
  tags: IdeaData_tags[];
  comments: IdeaData_comments[] | null;
  reactions: IdeaData_reactions[] | null;
  votes: IdeaData_votes[] | null;
  slipboxes: IdeaData_slipboxes[] | null;
  medium: IdeaData_medium | null;
}
