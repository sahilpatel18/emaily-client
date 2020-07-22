import axios from "axios";

import { FETCH_USER, FETCH_SURVEYS } from "./types";

export const baseApiUrl = `https://intense-fjord-06567.herokuapp.com`;

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get(`${baseApiUrl}/api/current_user`);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post(`${baseApiUrl}/api/stripe`, token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post(`${baseApiUrl}/api/surveys`, values);

  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get(`${baseApiUrl}/api/surveys`);

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
