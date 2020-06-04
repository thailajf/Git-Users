import { all } from 'redux-saga/effects';
import UserSaga from './User/saga';

export default function* rootSaga() {
  return yield all([UserSaga]);
}
