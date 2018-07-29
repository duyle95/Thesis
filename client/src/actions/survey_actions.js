import axios from "axios";

import { SUBMIT_SURVEY, FETCH_SURVEYS, FIND_RECIPIENT } from "actions/types";

export const submitSurvey = (survey, history) => async dispatch => {
  console.log(survey);

  let response;

  try {
    response = await axios.post("/api/surveys", survey);
    console.log(response.data);
    // history.push('/surveys');
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchSurveys = () => async dispatch => {
  let response;

  try {
    response = await axios.get("/api/surveys");
    console.log(response.data);
  } catch (e) {
    throw new Error(e);
  }
};

// export const findRecipient = recipientId => async dispatch => {
//   let response;
//
//   try {
//     response = await axios.get(`/api/recipient/${recipientId}`);
//     console.log(response.data);
//   } catch (e) {
//     throw new Error(e);
//   }
// };

export const submitRecipientAnswer = answer => async dispatch => {
  let response;

  try {
    response = await axios.post("/api/recipient/edit", answer);
    console.log(response.data);
  } catch (e) {
    throw new Error(e);
  }
};
