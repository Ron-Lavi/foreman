import { testComponentSnapshotsWithFixtures } from 'react-redux-test-utils';

import WizardPage from '../WizardPage';

const fixtures = {
  'render without Props': {},
  /** fixtures, props for the component */
};

describe('WizardPage', () => {
  describe('rendering', () =>
    testComponentSnapshotsWithFixtures(WizardPage, fixtures));
});
