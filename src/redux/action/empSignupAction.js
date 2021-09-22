import { SIGN_UP_FAILURE, SIGN_UP_START, SIGN_UP_SUCCESS } from '../types/signupTypes';
import axios from 'axios';
import { config } from '../../config';
import setAuthHeader from '../../utility/setAuthHeader';
import { setUserSession } from "../../utility/common";
const {BASEURL} = config;

const signupStart = () => ({
  type: SIGN_UP_START,
});

const signupSuccess = (data) => ({
  type: SIGN_UP_SUCCESS,
  payload: data,
});

const signupFailure = (err) => ({
  type: SIGN_UP_FAILURE,
  payload: err,
});

export const empSignupAsync = (data) => async (dispatch) => {
  try {
    dispatch(signupStart());
    const response = await axios.post(`${BASEURL}/employer/register`, data);
    setAuthHeader(response.data.data.token);
    setUserSession(response.data.data.token.split(" ")[1], response.data.data);
    dispatch(signupSuccess(response.data));
  } catch (err) {
    dispatch(signupFailure(err));
  }
};