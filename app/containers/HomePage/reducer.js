/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

// import produce from 'immer';
// import { CHANGE_USERNAME } from './constants';

// The initial state of the App
export const initialState = {
  api: [],
};

/* eslint-disable default-case, no-param-reassign */
const home = (state = initialState, action) => {
  switch (action.type) {
    case 'set':
      console.log('api', action.data);
      // state.api = action.data;

      return {
        ...state,
        api: [...action.data],
      };

    case 'updateDetails':
      console.log('initialState', state);
      console.log('ratingReducer', action.data);
      const findIndex = state.api.findIndex(item => item.id === action.data.id);
      // console.log(findIndex);
      // let findIndexRate = state.details.findIndex((item) => item.rating);
      // console.log("RatingIndex", findIndexRate);
      //   state.details[findIndex] = {...state.details[findIndex], ...actions.data}
      // let newDetails=[...state.details, state.details[findIndex].price=actions.data.price ]
      // let updateRatings =[...state.details,state.details[findIndexRate].rating=actions.data.rate]
      // console.log([updateRatings],'updated')
      const update = state.api.map(el =>
        el.id === action.data.id ? { ...el, ...action.data } : el,
      );
      console.log('details new', update);
      return {
        ...state,
        api: update,
        // details:
        //   actions.data.id === undefined
        //     ? [
        //         ...state.details,
        //         (state.details[findIndexRate].rating = actions.data.rate),
        //       ]
        //     : [
        //         ...state.details,
        //         (state.details[findIndex].price = actions.data.price),
        //       ],
      };

    default:
      return state;
  }
};

export default home;
