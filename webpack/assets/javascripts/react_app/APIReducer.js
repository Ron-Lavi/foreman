import Immutable from 'seamless-immutable';
import { API_OPERATIONS } from './APIConstants';
import { startAPIInterval, stopAPIInterval } from './APIHelpers';

const { START_POLLING, STOP_POLLING } = API_OPERATIONS;
const initialState = Immutable({
  polling: {},
});

export const reducer = (state = initialState, action) => {
  const {
    type,
    outputType,
    payload: { APIRequest, polling, key } = {},
  } = action;
  switch (type) {
    case START_POLLING: // eslint-disable-line no-case-declarations
      const pollingID = startAPIInterval(APIRequest, polling);
      return state.setIn(['polling'], {
        ...state.polling,
        [outputType]: pollingID,
      });
    case STOP_POLLING:
      stopAPIInterval(state.polling[key]);
      return state.setIn(['polling'], state.polling.without(key));
    default:
      return state;
  }
};

export const reducers = { API_operations: reducer };

export default reducer;
