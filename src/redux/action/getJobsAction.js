import {GET_JOB_START, GET_JOB_FAILURE, GET_JOB_SUCCESS} from '../types/getJobTypes';
import userFetch from '../../api/userFetch';


const getJobStart = () => ({
    type: GET_JOB_START,
  });
  
  const getJobSuccess = (data) => ({
    type: GET_JOB_SUCCESS,
    payload: data,
  });
  
  const getJobFailure = (err) => ({
    type: GET_JOB_FAILURE,
    payload: err,
  });
  
  export const getJobAsync = () => async (dispatch) => {
    try {
      dispatch(getJobStart());
      const response = await userFetch.get('/jobs');
      localStorage.setItem("userList", JSON.stringify(response.data));
      dispatch(getJobSuccess(response.data.data));
    } catch (err) {
      dispatch(getJobFailure(err));
    }
  };