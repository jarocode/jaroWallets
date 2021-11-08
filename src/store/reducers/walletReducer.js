import * as signInTypes from "../actions/wallet";

export const initialState = {
  walletId: "",
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case signInTypes.ADD_WALLET:
      return {
        ...state,
        ...action.data,
        success: true,
      };

    case signInTypes.CHANGE_WALLET_ID:
      return {
        ...state,
        walletId: action.data,
      };
    default:
      return state;
  }
};

export default walletReducer;
