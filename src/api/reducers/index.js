import { handleActions } from 'redux-actions';

import * as apiActions from '../actions';

const defaultState = {};

export default handleActions(
  {
    [apiActions.startLoading]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [apiActions.stopLoading]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  defaultState,
);
