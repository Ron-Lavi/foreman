import { API_OPERATIONS } from './APIConstants';

export const stopPollingAction = key => ({
  type: API_OPERATIONS.STOP_POLLING,
  payload: { key },
});
