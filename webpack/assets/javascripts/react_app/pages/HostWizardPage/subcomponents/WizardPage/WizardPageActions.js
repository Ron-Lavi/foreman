import {
  WIZARDPAGE_FILTER_UPDATE,
  WIZARDPAGE_ITEM_SELECTED,
  WIZARDPAGE_FETCH_ITEMS,
  WIZARDPAGE_PAGINATE,
} from './WizardPageConstants';
// import API from '../../../../API';
import { items } from '../CardList/CardList.fixtures';
import { chunkItemsByAmount } from './WizardPageHelper';

export const updateFilter = filter => ({
  type: WIZARDPAGE_FILTER_UPDATE,
  payload: { filter },
});

export const selectItem = id => ({
  type: WIZARDPAGE_ITEM_SELECTED,
  payload: { id },
});

export const fetchItems = path => dispatch => {
  // API.get(path)
  dispatch({
    type: WIZARDPAGE_FETCH_ITEMS,
    payload: {
      items: chunkItemsByAmount(items),
    },
  });
};

export const paginate = nextPage => ({
  type: WIZARDPAGE_PAGINATE,
  payload: { itemsPage: nextPage },
});
