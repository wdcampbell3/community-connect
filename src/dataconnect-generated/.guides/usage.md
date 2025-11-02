# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createForum, listForums, createPost, listPostsForForum } from '@dataconnect/generated';


// Operation CreateForum:  For variables, look at type CreateForumVars in ../index.d.ts
const { data } = await CreateForum(dataConnect, createForumVars);

// Operation ListForums: 
const { data } = await ListForums(dataConnect);

// Operation CreatePost:  For variables, look at type CreatePostVars in ../index.d.ts
const { data } = await CreatePost(dataConnect, createPostVars);

// Operation ListPostsForForum:  For variables, look at type ListPostsForForumVars in ../index.d.ts
const { data } = await ListPostsForForum(dataConnect, listPostsForForumVars);


```