import { all } from 'redux-saga/effects';

import homeSaga from '../pages/Home/sagas';

function* authSaga() {
  yield all([homeSaga()]);
}

export default authSaga;
