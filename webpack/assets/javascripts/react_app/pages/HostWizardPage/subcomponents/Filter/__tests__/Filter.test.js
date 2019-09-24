import { testComponentSnapshotsWithFixtures } from 'react-redux-test-utils';

import Filter from '../Filter';

const fixtures = {
  'render without Props': {},
  /** fixtures, props for the component */
};

describe('Filter', () => {
  describe('rendering', () =>
    testComponentSnapshotsWithFixtures(Filter, fixtures));
});
