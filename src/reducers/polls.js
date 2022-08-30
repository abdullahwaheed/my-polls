import { SET_POLLS, CREATE_POLL } from '../utils';

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
    default:
      return state;
  }
}
