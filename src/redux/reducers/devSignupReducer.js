import { SIGN_UP_FAILURE, SIGN_UP_START, SIGN_UP_SUCCESS } from "../types/signupTypes";
  
  const initialState = {
    data: {},
    isLoading: false,
    error: {},
  };
const devSignupReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case SIGN_UP_START:
        return {
          ...state,
          isLoading: true,
        };
      case SIGN_UP_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: payload,
        };
      case SIGN_UP_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: payload,
        };
      default:
        return state;
    }
};
  
export default devSignupReducer;
  