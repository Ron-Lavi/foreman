import { testComponentSnapshotsWithFixtures } from 'react-redux-test-utils';

import Card from '../Card';

const fixtures = {
  'render without Props': {},
  /** fixtures, props for the component */
};

describe('Card', () => {
  describe('rendering', () =>
    testComponentSnapshotsWithFixtures(Card, fixtures));
});
