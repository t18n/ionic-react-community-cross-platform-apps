/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { IdeaType, ReactionType, VoteType, MediumType } from "./../../../../types/graphql-types.gen";

// ====================================================
// GraphQL query operation: IdeaQuery
// ====================================================

export interface IdeaQuery_idea_user {
  __typename: "User";
  name: string;
  slug: string;
  cover: string | null;
}

export interface IdeaQuery_idea_tags {
  __typename: "Tag";
  name: string;
  slug: string;
}

export interface IdeaQuery_idea_comments_user {
  __typename: "User";
  name: string;
  slug: string;
  cover: string | null;
}

export interface IdeaQuery_idea_comments_reactions {
  __typename: "Reaction";
  type: ReactionType;
}

export interface IdeaQuery_idea_comments_slipboxes {
  __typename: "Slipbox";
  slug: string;
  name: string;
}

export interface IdeaQuery_idea_comments_votes {
  __typename: "Vote";
  type: VoteType;
}

export interface IdeaQuery_idea_comments {
  __typename: "Comment";
  slug: string;
  content: string;
  parentId: number | null;
  updatedAt: any;
  user: IdeaQuery_idea_comments_user;
  reactions: IdeaQuery_idea_comments_reactions[] | null;
  slipboxes: IdeaQuery_idea_comments_slipboxes[] | null;
  votes: IdeaQuery_idea_comments_votes[] | null;
}

export interface IdeaQuery_idea_reactions {
  __typename: "Reaction";
  type: ReactionType;
}

export interface IdeaQuery_idea_votes {
  __typename: "Vote";
  type: VoteType;
}

export interface IdeaQuery_idea_slipboxes {
  __typename: "Slipbox";
  name: string;
  slug: string;
}

export interface IdeaQuery_idea_medium {
  __typename: "Medium";
  type: MediumType;
  slug: string;
}

export interface IdeaQuery_idea {
  __typename: "Idea";
  type: IdeaType;
  slug: string;
  content: string;
  user: IdeaQuery_idea_user | null;
  tags: IdeaQuery_idea_tags[];
  comments: IdeaQuery_idea_comments[] | null;
  reactions: IdeaQuery_idea_reactions[] | null;
  votes: IdeaQuery_idea_votes[] | null;
  slipboxes: IdeaQuery_idea_slipboxes[] | null;
  medium: IdeaQuery_idea_medium | null;
}

export interface IdeaQuery {
  idea: IdeaQuery_idea;
}

export interface IdeaQueryVariables {
  slug: string;
}
