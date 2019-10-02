import { API_OPERATIONS, DEFAULT_POLLING } from './APIConstants';

export const pollingActionGenerator = (outputType, APIRequest, polling) => ({
  type: API_OPERATIONS.START_POLLING,
  outputType,
  payload: {
    APIRequest,
    polling,
  },
});

export const startAPIInterval = (APIRequest, ms) => {
  const pollingMiliSec = typeof ms === 'number' ? ms : DEFAULT_POLLING;
  return setInterval(APIRequest, pollingMiliSec);
};

export const stopAPIInterval = id => {
  clearInterval(id);
};
