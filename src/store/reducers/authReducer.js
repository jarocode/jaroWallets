import * as signInTypes from "../actions/auth";

export const initialState = {
  token: "",
  email: "",
  success: false,
  loginMinuite: "",
  sessionTimedOut: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case signInTypes.SIGN_IN:
      return {
        ...state,
        ...action.data,
        success: true,
      };

    case signInTypes.SIGN_OUT:
      return {
        token: action.data,
      };
    default:
      return state;
  }
};

export default authReducer;
