/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum IdeaType {
  HIGHLIGHT = "HIGHLIGHT",
  IDEA = "IDEA",
  QUOTE = "QUOTE",
}

export enum MediumType {
  ARTICLE = "ARTICLE",
  ARTWORK = "ARTWORK",
  BOOK = "BOOK",
  MOVIE = "MOVIE",
  MUSIC = "MUSIC",
  OTHER = "OTHER",
  PODCAST = "PODCAST",
  VIDEO = "VIDEO",
}

export enum ReactionType {
  ANGRY = "ANGRY",
  APPRECIATE = "APPRECIATE",
  HATE = "HATE",
  HURRA = "HURRA",
  LIKE = "LIKE",
  LOVE = "LOVE",
}

export interface IdeasInput {
  first: number;
  mediumSlug: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
