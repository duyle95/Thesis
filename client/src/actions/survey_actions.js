import axios from "axios";

import { SUBMIT_SURVEY, FETCH_SURVEYS, FIND_RECIPIENT } from "actions/types";

export const submitSurvey = survey => async dispatch => {
  const newSurvey = {
    title: "new title",
    subject: "new subject",
    body: "new body",
    recipients: "1@mail.com,2@mail.com",
    id: 1
  };

  let response;

  try {
    response = await axios.post("/api/surveys", newSurvey);
    console.log(response.data);
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

export const findRecipient = recipientId => async dispatch => {
  let response;

  try {
    response = await axios.get(`/api/recipient/${recipientId}`);
    console.log(response.data);
  } catch (e) {
    throw new Error(e);
  }
};
