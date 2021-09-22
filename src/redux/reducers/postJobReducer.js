import { POST_JOB_FAILURE, POST_JOB_START, POST_JOB_SUCCESS } from "../types/postJobTypes";
  
  const initialState = {
    data: {},
    isLoading: false,
    error: {},
  };
const postJobReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case POST_JOB_START:
        return {
          ...state,
          isLoading: true,
        };
      case POST_JOB_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: payload,
        };
      case POST_JOB_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: payload,
        };
      default:
        return state;
    }
};
  
export default postJobReducer;