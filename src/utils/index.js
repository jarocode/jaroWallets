/** load redux state */
export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    sessionStorage.removeItem("state");
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
/** save redux state */
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("state", serializedState);
  } catch (err) {
    console.log(err);
  }
};

const expireToken = (loginMinuite) => {
  const showExpired = () => {
    if (new Date().getMinutes() === loginMinuite) {
      console.log("expired");
      clearInterval(timer);
    } else {
      console.log(new Date().getMinutes());
    }
  };
  const timer = setInterval(showExpired, 1000);
};
