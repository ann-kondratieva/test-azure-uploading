import { REQUEST_POSTFIX, SUCCESS_POSTFIX, ERROR_POSTFIX } from '../constants';

export const isRequestAction = (action) => {
  return action.type.endsWith(REQUEST_POSTFIX);
};

export const isResponseAction = (action) => {
  return action.type.endsWith(SUCCESS_POSTFIX) || action.type.endsWith(ERROR_POSTFIX);
};
