import { combineReducers } from 'redux';

import homePage from '../pages/Home/reducers';

const reducer = combineReducers({
  homePage,
});

export default reducer;
