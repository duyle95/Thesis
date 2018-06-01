import { SIGNUP_USER, SIGNIN_USER, SIGNOUT_USER } from "actions/types";

const INITIAL_STATE = {
  isAuthenticated: false,
  errorMessage: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN_USER:
      return { ...state, ...action.payload };
    case SIGNUP_USER:
      return { ...state, ...action.payload };
    case SIGNOUT_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
