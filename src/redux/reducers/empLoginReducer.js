import { LOG_IN_FAILURE, LOG_IN_START, LOG_IN_SUCCESS } from "../types/loginTypes";
  
  const initialState = {
    data: {},
    isLoading: false,
    error: {},
  };
  const empLoginReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case LOG_IN_START:
        return {
          ...state,
          isLoading: true,
        };
      case LOG_IN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: payload,
        };
      case LOG_IN_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: payload,
        };
      default:
        return state;
    }
  };
  
  export default empLoginReducer;
  