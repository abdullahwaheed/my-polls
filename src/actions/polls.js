import { _saveQuestion } from "../_DATA";
import { SET_POLLS, CREATE_POLL } from '../actionTypes';
import { showLoading, hideLoading } from "react-redux-loading-bar";

function createPoll(poll) {
  return {
    type: CREATE_POLL,
    poll,
  };
}

export function handleCreatePoll(poll) {
  return (dispatch, getState) => {
    // const { authedUser } = getState();

    dispatch(showLoading());

    return _saveQuestion({
      
    })
      .then((poll) => dispatch(createPoll(poll)))
      .then(() => dispatch(hideLoading()));
  };
}

export function setPolls(polls) {
  return {
    type: SET_POLLS,
    polls,
  };
}
