import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "reducers/auth_reducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer
});
