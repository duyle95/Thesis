import axios from "axios";
import { SIGNIN_USER, SIGNUP_USER, SIGNOUT_USER } from "actions/types";

export const getCurrentUser = () => async dispatch => {
  try {
    const response = await axios.get("/api/current_user");
    dispatch({
      type: SIGNIN_USER,
      payload: {
        user: response.data
      }
    });
  } catch (e) {
    console.error(e);
  }
};

export const signinUser = (
  { email, password },
  redirectToDashboard
) => async dispatch => {
  try {
    const response = await axios.post("/api/users/signin", {
      email,
      password
    });
    dispatch({
      type: SIGNIN_USER,
      payload: { isAuthenticated: true, errorMessage: "" }
    });

    localStorage.setItem("token", response.data.token);
    axios.defaults.headers.common["authorization"] = response.data.token;
    redirectToDashboard();
  } catch (e) {
    dispatch({
      type: SIGNIN_USER,
      payload: {
        isAuthenticated: false,
        errorMessage: "Invalid login credentials"
      }
    });
  }
};

export const signupUser = (
  { email, password },
  redirectToDashboard
) => async dispatch => {
  try {
    const response = await axios.post("/api/users/signup", { email, password });
    dispatch({
      type: SIGNUP_USER,
      payload: { isAuthenticated: true, errorMessage: "" }
    });

    localStorage.setItem("token", response.data.token);
    axios.defaults.headers.common["authorization"] = response.data.token;
    redirectToDashboard();
  } catch (e) {
    dispatch({
      type: SIGNUP_USER,
      payload: { isAuthenticated: false, errorMessage: "Email is in use" }
    });
  }
};

export const signoutUser = () => {
  localStorage.removeItem("token");
  delete axios.defaults.headers.common["authorization"];
  return {
    type: SIGNOUT_USER,
    payload: { isAuthenticated: false, errorMessage: "" }
  };
};
