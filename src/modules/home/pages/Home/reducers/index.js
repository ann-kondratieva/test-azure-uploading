import { combineReducers } from 'redux';

import uploadedFiles from './uploadedFiles';

const reducer = combineReducers({
  uploadedFiles,
});

export default reducer;
