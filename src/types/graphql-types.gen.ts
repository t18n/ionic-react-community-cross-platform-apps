/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum CommentType {
  COMMENT = "COMMENT",
  RATING = "RATING",
}

export enum IdeaType {
  HIGHLIGHT = "HIGHLIGHT",
  IDEA = "IDEA",
  QUOTE = "QUOTE",
}

export enum LanguageType {
  Afrikaans = "Afrikaans",
  Albanian = "Albanian",
  Arabic = "Arabic",
  Basque = "Basque",
  Belarusian = "Belarusian",
  Bulgarian = "Bulgarian",
  Catalan = "Catalan",
  Chinese = "Chinese",
  Croatian = "Croatian",
  Czech = "Czech",
  Danish = "Danish",
  Dutch = "Dutch",
  English = "English",
  Estonian = "Estonian",
  Faeroese = "Faeroese",
  Farsi = "Farsi",
  Finnish = "Finnish",
  French = "French",
  Greek = "Greek",
  Hebrew = "Hebrew",
  Hindi = "Hindi",
  Hungarian = "Hungarian",
  Icelandic = "Icelandic",
  Indonesian = "Indonesian",
  Irish = "Irish",
  Italian = "Italian",
  Japanese = "Japanese",
  Korean = "Korean",
  Kurdish = "Kurdish",
  Latvian = "Latvian",
  Lithuanian = "Lithuanian",
  Macedonian = "Macedonian",
  Malayalam = "Malayalam",
  Malaysian = "Malaysian",
  Maltese = "Maltese",
  Norwegian = "Norwegian",
  Polish = "Polish",
  Portuguese = "Portuguese",
  Punjabi = "Punjabi",
  RhaetoRomanic = "RhaetoRomanic",
  Romanian = "Romanian",
  Russian = "Russian",
  Serbian = "Serbian",
  Slovak = "Slovak",
  Slovenian = "Slovenian",
  Sorbian = "Sorbian",
  Spanish = "Spanish",
  Swedish = "Swedish",
  Thai = "Thai",
  Tsonga = "Tsonga",
  Tswana = "Tswana",
  Turkish = "Turkish",
  Ukrainian = "Ukrainian",
  Urdu = "Urdu",
  Venda = "Venda",
  Vietnamese = "Vietnamese",
  Welsh = "Welsh",
  Xhosa = "Xhosa",
  Yiddish = "Yiddish",
  Zulu = "Zulu",
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

export enum VoteType {
  DOWNVOTE = "DOWNVOTE",
  NOVOTE = "NOVOTE",
  UPVOTE = "UPVOTE",
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
