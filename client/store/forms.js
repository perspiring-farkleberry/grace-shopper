/**
 * ACTION TYPES
 */
export const SET_MODAL = 'SET_MODAL';

/**
 * INITIAL STATE
 */
const InitialState = {
  showModal: false
}

// /**
//  * ACTION CREATORS
//  */
export const modal = (bool) => ({type: SET_MODAL, showModal: bool});

// /**
//  * REDUCER
//  */
export default function(state = InitialState, action) {
  switch (action.type) {
    case SET_MODAL:
      console.log("show modal?")
      return {...state, showModal: action.showModal};
    default:
      return state
  }
}
