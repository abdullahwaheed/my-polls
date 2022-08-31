import { LOGIN_USER, LOGOUT_USER } from "../utils/actionTypes";

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    user,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}
