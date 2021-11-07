export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export const SIGN_IN_CLEAR = "SIGN_IN_CLEAR";

export const signIn = (data) => ({
  type: SIGN_IN,
  data,
});

export const signOut = (data) => ({
  type: SIGN_OUT,
  data,
});
