import axios from "axios";
import { SIGNIN_USER, SIGNUP_USER, SIGNOUT_USER } from "actions/types";

export const signinUser = (
  { email, password },
  redirectToDashboard
) => async dispatch => {
  try {
    const response = await axios.post("api/users/signin", {
      email,
      password
    });
    console.log(response.data);
    dispatch({
      type: SIGNIN_USER,
      payload: { isAuthenticated: true, errorMessage: "" }
    });

    localStorage.setItem("token", response.data.token);
    redirectToDashboard();
  } catch (e) {
    console.log(e);
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
  return {
    type: SIGNOUT_USER,
    payload: { isAuthenticated: false, errorMessage: "" }
  };
};
