import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "reducers";

export default props => {
  const INITIAL_STATE = {
    auth: {
      isAuthenticated: localStorage.getItem("token") ? true : false
    }
  };

  const store = createStore(reducers, INITIAL_STATE, applyMiddleware(thunk));
  return <Provider store={store}>{props.children}</Provider>;
};
