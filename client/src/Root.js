import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "reducers";
import axios from "axios";

import { SIGNIN_USER } from "actions/types";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default props => {
  const store = createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(thunk))
  );
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["authorization"] = token;
    store.dispatch({
      type: SIGNIN_USER,
      payload: {
        isAuthenticated: true,
        errorMessage: ""
      }
    });
  } else {
    delete axios.defaults.headers.common["authorization"];
  }

  return <Provider store={store}>{props.children}</Provider>;
};
