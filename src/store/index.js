import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";
import rootReducer from './reducers/index';

const sagaMiddleWare = createSagaMiddleware();

const store = compose(
    applyMiddleware(sagaMiddleWare),
)(createStore)(rootReducer, composeWithDevTools())

sagaMiddleWare.run(rootSaga);

export { store };
