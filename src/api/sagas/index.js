import { call, put, all, takeEvery } from 'redux-saga/effects';
import camelCase from 'lodash/camelCase';

import * as apiCalls from '../calls';

import { isRequestAction, isResponseAction } from '../helpers';
import { startLoading, stopLoading } from '../actions';
import { REQUEST_POSTFIX, SUCCESS_POSTFIX, ERROR_POSTFIX } from '../constants';

function* sendRequest(action) {
  yield put(startLoading(action.type));
  const request = apiCalls[camelCase(action.type)];
  if (!request) {
    throw new Error(`no api method for action ${action.type}`);
  }
  try {
    const requestData = {
      ...action.payload,
    };
    const response = yield call(request, requestData);
    yield put({
      type: action.type.replace(REQUEST_POSTFIX, SUCCESS_POSTFIX),
      response: response ? response.data : {},
      payload: action.payload,
    });
  } catch (error) {
    console.log(error);
  }
}

function* receiveResponse(action) {
  const actionType = action.type
    .replace(SUCCESS_POSTFIX, REQUEST_POSTFIX)
    .replace(ERROR_POSTFIX, REQUEST_POSTFIX);
  yield put(stopLoading(actionType));
}

const watchRequestSaga = function*() {
  yield all([
    takeEvery(isRequestAction, sendRequest),
    takeEvery(isResponseAction, receiveResponse),
  ]);
};

export default watchRequestSaga;
