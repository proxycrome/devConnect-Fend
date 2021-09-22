import {GET_JOB_START, GET_JOB_FAILURE, GET_JOB_SUCCESS} from '../types/getJobTypes';

const initialState = {
    data: {},
    isLoading: false,
    error: {},
};

const getJobReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_JOB_START:
        return {
          ...state,
          isLoading: true,
        };
      case GET_JOB_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: payload,
        };
      case GET_JOB_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: payload,
        };
      default:
        return state;
    }
};
  
export default getJobReducer;