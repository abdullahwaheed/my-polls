import { SET_USERS, CREATE_POLL } from "../utils/actionTypes";

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
    default:
      return state;
  }
}
