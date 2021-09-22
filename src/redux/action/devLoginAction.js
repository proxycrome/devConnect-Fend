import { config } from "../../config";
import axios from "axios";
import setAuthHeader from "../../utility/setAuthHeader";
import { setUserSession } from "../../utility/common";
import { LOG_IN_FAILURE, LOG_IN_START, LOG_IN_SUCCESS } from "../types/loginTypes";

const { BASEURL } = config;

const loginStart = () => ({
  type: LOG_IN_START,
});

const loginSuccess = (data) => ({
  type: LOG_IN_SUCCESS,
  payload: data,
});

const loginFailure = (err) => ({
  type: LOG_IN_FAILURE,
  payload: err,
});

export const devLoginAsync = (data) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const response = await axios.post(`${BASEURL}/login`, data);
    dispatch(loginSuccess(response.data.data));
    setAuthHeader(response.data.data.token);
    setUserSession(response.data.data.token.split(" ")[1], response.data.data);  
  } catch (err) {
    dispatch(loginFailure(err));
  }
};