import storage from 'redux-persist/lib/storage';
import { connectRouter } from 'connected-react-router';
import { persistCombineReducers, createTransform } from 'redux-persist';
import omit from 'lodash/omit';

import apiCalls from 'api/reducers';
import home from 'modules/home/reducers';

const signInTransform = createTransform(
  (state, key) => state,
  (state, key) => omit(state, 'signIn'),
  { whitelist: ['auth'] },
);

const signUpTransform = createTransform(
  (state, key) => state,
  (state, key) => omit(state, 'signUp'),
  { whitelist: ['auth'] },
);

const rootPersistConfig = {
  key: 'authData',
  storage: storage,
  whitelist: ['auth'],
  transforms: [signInTransform, signUpTransform],
};

const rootReducer = (history) =>
  persistCombineReducers(rootPersistConfig, {
    router: connectRouter(history),
    apiCalls,
    home,
  });

export default rootReducer;
