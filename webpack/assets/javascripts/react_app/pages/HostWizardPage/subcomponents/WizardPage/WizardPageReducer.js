import Immutable from 'seamless-immutable';

import {
  WIZARDPAGE_FILTER_UPDATE,
  WIZARDPAGE_ITEM_SELECTED,
  WIZARDPAGE_FETCH_ITEMS,
  WIZARDPAGE_PAGINATE,
} from './WizardPageConstants';

const initialState = Immutable({
  filter: '',
  selectedID: null,
  items: [],
  itemsPage: 1,
});

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case WIZARDPAGE_FILTER_UPDATE:
      return state.set('filter', payload.filter);
    case WIZARDPAGE_ITEM_SELECTED:
      return state.set('selectedID', payload.id);
    case WIZARDPAGE_FETCH_ITEMS:
      return state.set('items', payload.items);
    case WIZARDPAGE_PAGINATE:
      return state.set('itemsPage', payload.itemsPage);
    default:
      return state;
  }
};
