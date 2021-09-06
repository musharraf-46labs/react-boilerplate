/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

// import produce from 'immer';
// import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR } from './constants';
// import moduleName from './actions';
// The initial state of the App
export const initialState = {
  api: [],
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState) => state;

export default appReducer;
