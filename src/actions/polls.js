import {
  SET_POLLS, CREATE_POLL, SAVE_POLL_ANSWER,
  saveQuestion, getQuestions, saveQuestionAnswer
} from '../utils';
import { showLoading, hideLoading } from "react-redux-loading-bar";

function createPoll(poll) {
  return {
    type: CREATE_POLL,
    poll,
  };
}

export function handleCreatePoll(pollQuestion) {
  return (dispatch) => {
    dispatch(showLoading());

    return saveQuestion(pollQuestion)
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

function savePollResponse(pollData) {
  return {
    type: SAVE_POLL_ANSWER,
    pollData,
  };
}

export function handleSavePollResponse(pollData) {
  return (dispatch) => {
    return saveQuestionAnswer(pollData).then(() => dispatch(savePollResponse(pollData)));
  };
}

