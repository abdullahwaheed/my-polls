import { SET_POLLS, CREATE_POLL, saveQuestion, getQuestions } from '../utils';
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

    return saveQuestion({
      
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

export function handleGetPolls() {
  return dispatch => getQuestions().then(polls => dispatch(setPolls(polls)))
}
