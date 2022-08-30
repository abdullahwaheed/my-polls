import { getInitialData } from "../_DATA";
import { setUsers } from "./users";
import { setPolls } from "./polls";
import { showLoading, hideLoading } from "react-redux-loading-bar";


export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, polls }) => {
      dispatch(setUsers(users));
      dispatch(setPolls(polls));
      dispatch(hideLoading());
    });
  };
}
