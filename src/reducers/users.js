import { SET_USERS, CREATE_POLL, SAVE_POLL_ANSWER } from "../utils/actionTypes";

export default function users(state = {}, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case CREATE_POLL:
      const { poll } = action;
      return {
        ...state,
        [poll.author]: {
          ...state[poll.author],
          questions: [...state[poll.author].questions, poll.id]
        },
      };
    case SAVE_POLL_ANSWER:
      const { authedUser, answer, qid } = action.pollData;
      return {
      ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    default:
      return state;
  }
}
