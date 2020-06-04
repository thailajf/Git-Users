import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../Services/api';
import { UserSuccess, UserFailure } from './action';
import history from '../../../Services/history';

export function* User({ payload }) {
  try {
    const responseUser = yield call(api.get, `/api/users/${payload}/details`);

    const user = responseUser.data.data;
    const responseRepos = yield call(api.get, `api/users/${payload}/repos`);
    const repositories = responseRepos.data.data;

    if (!user) {
      console.log('User was not found');
      return;
    }
    if (!repositories) {
      console.log('Repositories was not found');
      return;
    }

    yield put(UserSuccess(user, repositories));
    history.push('/user');
  } catch (err) {
    yield put(UserFailure());
  }
}

export default all([takeLatest('@user/UserData_REQUEST', User)]);
