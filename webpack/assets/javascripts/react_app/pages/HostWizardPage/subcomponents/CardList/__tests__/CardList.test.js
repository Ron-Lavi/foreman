import { testComponentSnapshotsWithFixtures } from 'react-redux-test-utils';

import CardList from '../CardList';

const fixtures = {
  'render without Props': {},
  /** fixtures, props for the component */
};

describe('CardList', () => {
  describe('rendering', () =>
    testComponentSnapshotsWithFixtures(CardList, fixtures));
});
