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
export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = [], actions) => {
  switch (actions.type) {
    case 'addToCart':
      // console.warn('reducer',actions)
      return [...state, { cart: actions.data }];
    case 'removeFromCart':
      // var index= state.indexOf(actions.data.delete)
      console.log('state', state);
      var index = state.findIndex(function(i) {
        return i.cart.image === actions.data.delete;
      });
      // console.log('index',index)
      var final = state.splice(index, 1);

      var state1 = state;
      //  console.log(state)
      return [...state1];

    default:
      return state;
  }
};
export default appReducer;
