import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../Services/api';
import { UserSuccess, UserFailure } from './action';

export function* User({ payload }) {
  try {
    const responseUser = yield call(api.get, `/api/users/${payload}/details`);
    console.log(responseUser.data);

    const user = responseUser.data.data;
    const responseRepos = yield call(api.get, `api/users/${payload}/repos`);
    const repositories = responseRepos.data.data;
    // console.log(repositories.data);

    // verificação se existe usuario
    if (!user) {
      console.log('Não foi possivel encontrar usuario');
      return;
    }
    if (!repositories) {
      console.log('Não foi possivel encontrar Repositorio');
      return;
    }

    yield put(UserSuccess(user, repositories));
  } catch (err) {
    //  Alert.alert('Erro ', 'falha ao mostrar os dados do usuario');
    yield put(UserFailure());
  }
}

export default all([takeLatest('@user/UserData_REQUEST', User)]);
