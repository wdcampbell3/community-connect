import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateForumData {
  forum_insert: Forum_Key;
}

export interface CreateForumVariables {
  title: string;
  description?: string | null;
}

export interface CreatePostData {
  post_insert: Post_Key;
}

export interface CreatePostVariables {
  forumId: UUIDString;
  content: string;
}

export interface Event_Key {
  id: UUIDString;
  __typename?: 'Event_Key';
}

export interface Forum_Key {
  id: UUIDString;
  __typename?: 'Forum_Key';
}

export interface ListForumsData {
  forums: ({
    id: UUIDString;
    title: string;
    description?: string | null;
    createdAt: TimestampString;
  } & Forum_Key)[];
}

export interface ListPostsForForumData {
  posts: ({
    id: UUIDString;
    content: string;
    createdAt: TimestampString;
    user: {
      id: UUIDString;
      displayName: string;
      photoUrl?: string | null;
    } & User_Key;
  } & Post_Key)[];
}

export interface ListPostsForForumVariables {
  forumId: UUIDString;
}

export interface Post_Key {
  id: UUIDString;
  __typename?: 'Post_Key';
}

export interface Registration_Key {
  userId: UUIDString;
  eventId: UUIDString;
  __typename?: 'Registration_Key';
}

export interface Resource_Key {
  id: UUIDString;
  __typename?: 'Resource_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateForumRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateForumVariables): MutationRef<CreateForumData, CreateForumVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateForumVariables): MutationRef<CreateForumData, CreateForumVariables>;
  operationName: string;
}
export const createForumRef: CreateForumRef;

export function createForum(vars: CreateForumVariables): MutationPromise<CreateForumData, CreateForumVariables>;
export function createForum(dc: DataConnect, vars: CreateForumVariables): MutationPromise<CreateForumData, CreateForumVariables>;

interface ListForumsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListForumsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListForumsData, undefined>;
  operationName: string;
}
export const listForumsRef: ListForumsRef;

export function listForums(): QueryPromise<ListForumsData, undefined>;
export function listForums(dc: DataConnect): QueryPromise<ListForumsData, undefined>;

interface CreatePostRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePostVariables): MutationRef<CreatePostData, CreatePostVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreatePostVariables): MutationRef<CreatePostData, CreatePostVariables>;
  operationName: string;
}
export const createPostRef: CreatePostRef;

export function createPost(vars: CreatePostVariables): MutationPromise<CreatePostData, CreatePostVariables>;
export function createPost(dc: DataConnect, vars: CreatePostVariables): MutationPromise<CreatePostData, CreatePostVariables>;

interface ListPostsForForumRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListPostsForForumVariables): QueryRef<ListPostsForForumData, ListPostsForForumVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListPostsForForumVariables): QueryRef<ListPostsForForumData, ListPostsForForumVariables>;
  operationName: string;
}
export const listPostsForForumRef: ListPostsForForumRef;

export function listPostsForForum(vars: ListPostsForForumVariables): QueryPromise<ListPostsForForumData, ListPostsForForumVariables>;
export function listPostsForForum(dc: DataConnect, vars: ListPostsForForumVariables): QueryPromise<ListPostsForForumData, ListPostsForForumVariables>;

