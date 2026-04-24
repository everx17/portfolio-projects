import { IS_LOG_IN } from "./constants";

export const dispatchIsLogIn = (logIn) => (dispatch) => {
  dispatch({
    type: IS_LOG_IN,
    payload: logIn,
  });
};
