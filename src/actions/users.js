import { SET_USERS, getUsers } from "../utils";

export function setUsers(users) {
  return {
    type: SET_USERS,
    users,
  };
}

export function handleGetUsers() {
  return dispatch => getUsers().then(users => dispatch(setUsers(users)))
}
