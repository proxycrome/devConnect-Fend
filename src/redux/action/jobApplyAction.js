import { JOB_APPLY_START, JOB_APPLY_SUCCESS, JOB_APPLY_FAILURE } from "../types/jobApplyTypes";
import axios from "axios";
import { config } from '../../config';
const {BASEURL} = config;

const jobApplyStart = () => ({
    type: JOB_APPLY_START,
  });
  
  const jobApplySuccess = (data) => ({
    type: JOB_APPLY_SUCCESS,
    payload: data,
  });
  
  const jobApplyFailure = (err) => ({
    type: JOB_APPLY_FAILURE,
    payload: err,
  });
  
  export const jobApplyAsync = (data) => async (dispatch) => {
    try {
        dispatch(jobApplyStart());
        const response = await axios.post(`${BASEURL}/users/apply`, data);
        dispatch(jobApplySuccess(response.data.data));
    } catch (err) {
        dispatch(jobApplyFailure(err.response));
    }
  };