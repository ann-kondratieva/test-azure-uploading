import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export const history = createBrowserHistory();

const router = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

export function configureStore() {
  let store = createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(sagaMiddleware, router)),
  );
  if (process.env.NODE_ENV === 'production') {
    store = createStore(rootReducer(history), applyMiddleware(sagaMiddleware, router));
  }
  sagaMiddleware.run(rootSaga);
  return store;
}
