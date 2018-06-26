import { SUBMIT_SURVEY } from "actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SUBMIT_SURVEY:
      return action.payload;
    default:
      return state;
  }
};
