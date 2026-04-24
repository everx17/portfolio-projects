import { IS_LOG_IN } from "./constants";
const initialState = {
  logIn: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOG_IN:
      return {
        ...state,
        logIn: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
