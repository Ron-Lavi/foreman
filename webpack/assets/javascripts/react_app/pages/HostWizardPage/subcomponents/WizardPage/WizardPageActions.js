import { WIZARDPAGE_FILTER_UPDATE } from './WizardPageConstants';

export const updateFilter = filter => ({
  type: WIZARDPAGE_FILTER_UPDATE,
  payload: { filter },
});
