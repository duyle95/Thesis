import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import "services/localStorage";
import moxios from "moxios";
import { SIGNIN_USER } from "actions/types";
// import auth_reducer from "reducers/auth_reducer";
import { signinUser } from "actions";
import axios from "axios";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

it.only("submit sign in form should submit data", () => {
  const store = mockStore({});
  moxios.stubRequest(
    "http://localhost:5000/api/users/signin",
    {
      status: 200,
      response: {
        token: "aidofnio134oisf"
      }
    },
    5
  );

  return store
    .dispatch(
      signinUser({ email: "2@mail.com", password: "password" }, () =>
        console.log("successful")
      )
    )
    .then(done => {
      const actions = store.getActions();

      done();
    });
});
