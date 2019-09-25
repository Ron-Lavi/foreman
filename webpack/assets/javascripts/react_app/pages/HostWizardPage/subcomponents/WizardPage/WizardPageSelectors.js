export const selectWizardPage = state => state.wizardPage;
export const selectFilter = state => selectWizardPage(state).filter;
export const selectSelectedID = state => selectWizardPage(state).selectedID;
export const selectItems = state => selectWizardPage(state).items;
export const selectItemsPage = state => selectWizardPage(state).itemsPage;
