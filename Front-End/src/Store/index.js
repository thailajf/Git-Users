import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { applyMiddleware } from 'redux';
import createStore from './createStore';

import rootReducer from './Modules/rootReducer';
import rootSaga from './Modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const logguer = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logguer)
);

sagaMiddleware.run(rootSaga);
