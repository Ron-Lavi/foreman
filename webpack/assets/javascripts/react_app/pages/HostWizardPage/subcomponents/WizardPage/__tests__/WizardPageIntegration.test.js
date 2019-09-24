import React from 'react';
import { IntegrationTestHelper } from 'react-redux-test-utils';

import WizardPage, { reducers } from '../index';

describe('WizardPage integration test', () => {
  it('should flow', async () => {
    const integrationTestHelper = new IntegrationTestHelper(reducers);
    const component = integrationTestHelper.mount(<WizardPage />);
    component.update();
    /** Create a Flow test */
  });
});
