export function UserRequest(login) {
  return {
    type: '@user/UserData_REQUEST',
    payload: login,
  };
}

export function UserSuccess(user, repositories) {
  return {
    type: '@user/UserData_SUCCESS',
    payload: { user, repositories },
  };
}

export function UserFailure() {
  return {
    type: '@user/UserData_FAILURE',
  };
}
