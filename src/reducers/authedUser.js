import { LOGIN_USER, LOGOUT_USER } from "../utils/actionTypes";

export default function authedUser(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return action.user;
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
};
