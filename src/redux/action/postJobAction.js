import { POST_JOB_FAILURE, POST_JOB_START, POST_JOB_SUCCESS } from '../types/postJobTypes';
import axios from 'axios';
import { config } from '../../config';
const {BASEURL} = config;

const postJobStart = () => ({
  type: POST_JOB_START,
});

const postJobSuccess = (data) => ({
  type: POST_JOB_SUCCESS,
  payload: data,
});

const postJobFailure = (err) => ({
  type: POST_JOB_FAILURE,
  payload: err,
});

export const postJobAsync = (data) => async (dispatch) => {
  try {
    dispatch(postJobStart());
    const response = await axios.post(`${BASEURL}/users/employer/s/jobs`, data);
    
    dispatch(postJobSuccess(response.data));
  } catch (err) {
    dispatch(postJobFailure(err));
  }
};