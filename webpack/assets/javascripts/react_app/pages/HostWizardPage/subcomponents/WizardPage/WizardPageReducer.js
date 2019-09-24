import Immutable from 'seamless-immutable';

import { WIZARDPAGE_FILTER_UPDATE } from './WizardPageConstants';

const initialState = Immutable({
  filter: '',
});

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case WIZARDPAGE_FILTER_UPDATE:
      return state.set('filter', payload.filter);
    default:
      return state;
  }
};
