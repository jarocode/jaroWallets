export const ADD_WALLET = "ADD_WALLET";
export const CHANGE_WALLET_ID = "CHANGE_WALLET_ID";

export const addWallet = (data) => ({
  type: ADD_WALLET,
  data,
});

export const changeWalletId = (data) => ({
  type: CHANGE_WALLET_ID,
  data,
});
