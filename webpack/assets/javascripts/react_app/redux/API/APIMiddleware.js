import { API_OPERATIONS, actionTypeGenerator } from './';
import { get } from './APIRequest';
import { pollingActionGenerator } from './APIHelpers';

export const APIMiddleware = store => next => action => {
  const {
    type,
    outputType,
    payload = {},
    url,
    actionTypes = {},
    polling,
  } = action;
  if (type === API_OPERATIONS.GET) {
    const APIRequest = () =>
      get(payload, url, store, actionTypeGenerator(outputType, actionTypes));
    if (polling) {
      next(pollingActionGenerator(outputType, APIRequest, polling));
    } else {
      APIRequest();
    }
  } else {
    next(action);
  }
};
