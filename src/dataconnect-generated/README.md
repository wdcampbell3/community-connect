# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListForums*](#listforums)
  - [*ListPostsForForum*](#listpostsforforum)
- [**Mutations**](#mutations)
  - [*CreateForum*](#createforum)
  - [*CreatePost*](#createpost)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListForums
You can execute the `ListForums` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listForums(): QueryPromise<ListForumsData, undefined>;

interface ListForumsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListForumsData, undefined>;
}
export const listForumsRef: ListForumsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listForums(dc: DataConnect): QueryPromise<ListForumsData, undefined>;

interface ListForumsRef {
  ...
  (dc: DataConnect): QueryRef<ListForumsData, undefined>;
}
export const listForumsRef: ListForumsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listForumsRef:
```typescript
const name = listForumsRef.operationName;
console.log(name);
```

### Variables
The `ListForums` query has no variables.
### Return Type
Recall that executing the `ListForums` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListForumsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListForumsData {
  forums: ({
    id: UUIDString;
    title: string;
    description?: string | null;
    createdAt: TimestampString;
  } & Forum_Key)[];
}
```
### Using `ListForums`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listForums } from '@dataconnect/generated';


// Call the `listForums()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listForums();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listForums(dataConnect);

console.log(data.forums);

// Or, you can use the `Promise` API.
listForums().then((response) => {
  const data = response.data;
  console.log(data.forums);
});
```

### Using `ListForums`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listForumsRef } from '@dataconnect/generated';


// Call the `listForumsRef()` function to get a reference to the query.
const ref = listForumsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listForumsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.forums);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.forums);
});
```

## ListPostsForForum
You can execute the `ListPostsForForum` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listPostsForForum(vars: ListPostsForForumVariables): QueryPromise<ListPostsForForumData, ListPostsForForumVariables>;

interface ListPostsForForumRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListPostsForForumVariables): QueryRef<ListPostsForForumData, ListPostsForForumVariables>;
}
export const listPostsForForumRef: ListPostsForForumRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPostsForForum(dc: DataConnect, vars: ListPostsForForumVariables): QueryPromise<ListPostsForForumData, ListPostsForForumVariables>;

interface ListPostsForForumRef {
  ...
  (dc: DataConnect, vars: ListPostsForForumVariables): QueryRef<ListPostsForForumData, ListPostsForForumVariables>;
}
export const listPostsForForumRef: ListPostsForForumRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPostsForForumRef:
```typescript
const name = listPostsForForumRef.operationName;
console.log(name);
```

### Variables
The `ListPostsForForum` query requires an argument of type `ListPostsForForumVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListPostsForForumVariables {
  forumId: UUIDString;
}
```
### Return Type
Recall that executing the `ListPostsForForum` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPostsForForumData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListPostsForForum`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPostsForForum, ListPostsForForumVariables } from '@dataconnect/generated';

// The `ListPostsForForum` query requires an argument of type `ListPostsForForumVariables`:
const listPostsForForumVars: ListPostsForForumVariables = {
  forumId: ..., 
};

// Call the `listPostsForForum()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPostsForForum(listPostsForForumVars);
// Variables can be defined inline as well.
const { data } = await listPostsForForum({ forumId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPostsForForum(dataConnect, listPostsForForumVars);

console.log(data.posts);

// Or, you can use the `Promise` API.
listPostsForForum(listPostsForForumVars).then((response) => {
  const data = response.data;
  console.log(data.posts);
});
```

### Using `ListPostsForForum`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPostsForForumRef, ListPostsForForumVariables } from '@dataconnect/generated';

// The `ListPostsForForum` query requires an argument of type `ListPostsForForumVariables`:
const listPostsForForumVars: ListPostsForForumVariables = {
  forumId: ..., 
};

// Call the `listPostsForForumRef()` function to get a reference to the query.
const ref = listPostsForForumRef(listPostsForForumVars);
// Variables can be defined inline as well.
const ref = listPostsForForumRef({ forumId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPostsForForumRef(dataConnect, listPostsForForumVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.posts);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.posts);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateForum
You can execute the `CreateForum` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createForum(vars: CreateForumVariables): MutationPromise<CreateForumData, CreateForumVariables>;

interface CreateForumRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateForumVariables): MutationRef<CreateForumData, CreateForumVariables>;
}
export const createForumRef: CreateForumRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createForum(dc: DataConnect, vars: CreateForumVariables): MutationPromise<CreateForumData, CreateForumVariables>;

interface CreateForumRef {
  ...
  (dc: DataConnect, vars: CreateForumVariables): MutationRef<CreateForumData, CreateForumVariables>;
}
export const createForumRef: CreateForumRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createForumRef:
```typescript
const name = createForumRef.operationName;
console.log(name);
```

### Variables
The `CreateForum` mutation requires an argument of type `CreateForumVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateForumVariables {
  title: string;
  description?: string | null;
}
```
### Return Type
Recall that executing the `CreateForum` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateForumData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateForumData {
  forum_insert: Forum_Key;
}
```
### Using `CreateForum`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createForum, CreateForumVariables } from '@dataconnect/generated';

// The `CreateForum` mutation requires an argument of type `CreateForumVariables`:
const createForumVars: CreateForumVariables = {
  title: ..., 
  description: ..., // optional
};

// Call the `createForum()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createForum(createForumVars);
// Variables can be defined inline as well.
const { data } = await createForum({ title: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createForum(dataConnect, createForumVars);

console.log(data.forum_insert);

// Or, you can use the `Promise` API.
createForum(createForumVars).then((response) => {
  const data = response.data;
  console.log(data.forum_insert);
});
```

### Using `CreateForum`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createForumRef, CreateForumVariables } from '@dataconnect/generated';

// The `CreateForum` mutation requires an argument of type `CreateForumVariables`:
const createForumVars: CreateForumVariables = {
  title: ..., 
  description: ..., // optional
};

// Call the `createForumRef()` function to get a reference to the mutation.
const ref = createForumRef(createForumVars);
// Variables can be defined inline as well.
const ref = createForumRef({ title: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createForumRef(dataConnect, createForumVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.forum_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.forum_insert);
});
```

## CreatePost
You can execute the `CreatePost` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createPost(vars: CreatePostVariables): MutationPromise<CreatePostData, CreatePostVariables>;

interface CreatePostRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePostVariables): MutationRef<CreatePostData, CreatePostVariables>;
}
export const createPostRef: CreatePostRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createPost(dc: DataConnect, vars: CreatePostVariables): MutationPromise<CreatePostData, CreatePostVariables>;

interface CreatePostRef {
  ...
  (dc: DataConnect, vars: CreatePostVariables): MutationRef<CreatePostData, CreatePostVariables>;
}
export const createPostRef: CreatePostRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createPostRef:
```typescript
const name = createPostRef.operationName;
console.log(name);
```

### Variables
The `CreatePost` mutation requires an argument of type `CreatePostVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreatePostVariables {
  forumId: UUIDString;
  content: string;
}
```
### Return Type
Recall that executing the `CreatePost` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreatePostData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreatePostData {
  post_insert: Post_Key;
}
```
### Using `CreatePost`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createPost, CreatePostVariables } from '@dataconnect/generated';

// The `CreatePost` mutation requires an argument of type `CreatePostVariables`:
const createPostVars: CreatePostVariables = {
  forumId: ..., 
  content: ..., 
};

// Call the `createPost()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createPost(createPostVars);
// Variables can be defined inline as well.
const { data } = await createPost({ forumId: ..., content: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createPost(dataConnect, createPostVars);

console.log(data.post_insert);

// Or, you can use the `Promise` API.
createPost(createPostVars).then((response) => {
  const data = response.data;
  console.log(data.post_insert);
});
```

### Using `CreatePost`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createPostRef, CreatePostVariables } from '@dataconnect/generated';

// The `CreatePost` mutation requires an argument of type `CreatePostVariables`:
const createPostVars: CreatePostVariables = {
  forumId: ..., 
  content: ..., 
};

// Call the `createPostRef()` function to get a reference to the mutation.
const ref = createPostRef(createPostVars);
// Variables can be defined inline as well.
const ref = createPostRef({ forumId: ..., content: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createPostRef(dataConnect, createPostVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.post_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.post_insert);
});
```

