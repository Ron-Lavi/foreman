import { testReducerSnapshotWithFixtures } from 'react-redux-test-utils';
import reducer from '../WizardPageReducer';

const fixtures = {
  'should return the initial state': {},
};

describe('WizardPage reducer', () =>
  testReducerSnapshotWithFixtures(reducer, fixtures));
