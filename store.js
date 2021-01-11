import { createStore, applyMiddleware } from 'redux';
import AppReducer from './reducers';
import createSagaMiddleware from 'redux-saga'
import RootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware()

const store = createStore(AppReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga)

export default store;