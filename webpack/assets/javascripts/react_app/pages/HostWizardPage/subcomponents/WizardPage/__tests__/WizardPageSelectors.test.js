import { testSelectorsSnapshotWithFixtures } from 'react-redux-test-utils';
import { selectWizardPage, selectBool } from '../WizardPageSelectors';

const state = {
  wizardPage: {
    bool: false,
  },
};

const fixtures = {
  'should return WizardPage': () => selectWizardPage(state),
  'should return WizardPage bool': () => selectBool(state),
};

describe('WizardPage selectors', () =>
  testSelectorsSnapshotWithFixtures(fixtures));
