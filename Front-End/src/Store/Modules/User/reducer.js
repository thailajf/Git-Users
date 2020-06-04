import { produce } from 'immer';

const INITIAL_STATE = {
  repositories: null,
  user: null,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@user/UserData_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@user/UserData_SUCCESS': {
        draft.repositories = action.payload.repositories;
        draft.user = action.payload.user;
        draft.loading = false;
        break;
      }
      case '@user/UserData_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
