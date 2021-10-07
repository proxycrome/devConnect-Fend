import { JOB_APPLY_START, JOB_APPLY_SUCCESS, JOB_APPLY_FAILURE } from "../types/jobApplyTypes";
  
  const initialState = {
    isAuthenticated: false,
    data: {},
    isLoading: false,
    error: {}
  };
const jobApplyReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case JOB_APPLY_START:
        return {
          ...state,
          isLoading: true,
        };
      case JOB_APPLY_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: payload,
          isAuthenticated: true,
        };
      case JOB_APPLY_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: payload,
        };
      default:
        return state;
    }
};
  
export default jobApplyReducer;