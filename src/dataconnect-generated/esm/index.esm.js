import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'communityconnect',
  location: 'us-east4'
};

export const createForumRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateForum', inputVars);
}
createForumRef.operationName = 'CreateForum';

export function createForum(dcOrVars, vars) {
  return executeMutation(createForumRef(dcOrVars, vars));
}

export const listForumsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListForums');
}
listForumsRef.operationName = 'ListForums';

export function listForums(dc) {
  return executeQuery(listForumsRef(dc));
}

export const createPostRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePost', inputVars);
}
createPostRef.operationName = 'CreatePost';

export function createPost(dcOrVars, vars) {
  return executeMutation(createPostRef(dcOrVars, vars));
}

export const listPostsForForumRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPostsForForum', inputVars);
}
listPostsForForumRef.operationName = 'ListPostsForForum';

export function listPostsForForum(dcOrVars, vars) {
  return executeQuery(listPostsForForumRef(dcOrVars, vars));
}

