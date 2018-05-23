import axios from 'axios';
import {
  SIGN_IN_USER,
  SIGN_UP_USER
} from './types';

export const signinUser = ({ email, password }) => async dispatch => {
  let user = await axios.post("/api/users/signin", { email, password });
  console.log(user);
}
