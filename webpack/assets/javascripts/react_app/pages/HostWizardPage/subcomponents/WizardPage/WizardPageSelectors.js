export const selectWizardPage = state => state.wizardPage;
export const selectFilter = state => selectWizardPage(state).filter;
