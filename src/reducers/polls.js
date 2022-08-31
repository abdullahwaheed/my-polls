import { SET_POLLS, CREATE_POLL, SAVE_POLL_ANSWER } from '../utils';

export default function polls(state = {}, action) {
  switch (action.type) {
    case SET_POLLS:
      return {
        ...state,
        ...action.polls,
      };
    case CREATE_POLL:
      return {
        ...state,
        [action.poll.id]: action.poll,
      };
    case SAVE_POLL_ANSWER:
      const { authedUser, answer, qid } = action.pollData;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };
    default:
      return state;
  }
}
