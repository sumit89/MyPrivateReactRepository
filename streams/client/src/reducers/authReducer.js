import { SIGN_IN, SIGN_OUT } from '../actions/types';

// do not modify this under any circumstance
const INTIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
      // return { ...state, isSignedIn: true };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
      // return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
