/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

//import produce from 'immer';
//import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR } from './constants';
//import moduleName from './actions';
// The initial state of the App
export const initialState = {
 api:[]
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  {
    switch (action.type) {
     
      case "set":
        console.log(state.api)
       // state.api = action.data;
     
        return{
          ...state, api: [...action.data]
        };
      default:
          return state;
    }
  }

export default appReducer;


{/** case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break; */}