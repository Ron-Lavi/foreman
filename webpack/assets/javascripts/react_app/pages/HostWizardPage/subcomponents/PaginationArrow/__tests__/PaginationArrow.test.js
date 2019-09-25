import { testComponentSnapshotsWithFixtures } from 'react-redux-test-utils';

import PaginationArrow from '../PaginationArrow';

const fixtures = {
  'render without Props': {},
  /** fixtures, props for the component */
};

describe('PaginationArrow', () => {
  describe('rendering', () =>
    testComponentSnapshotsWithFixtures(PaginationArrow, fixtures));
});
