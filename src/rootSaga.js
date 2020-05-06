import { all } from 'redux-saga/effects';

import apiCallsSaga from 'api/sagas';
import homeSaga from 'modules/home/sagas';

function* rootSaga() {
  yield all([apiCallsSaga(), homeSaga()]);
}

export default rootSaga;
