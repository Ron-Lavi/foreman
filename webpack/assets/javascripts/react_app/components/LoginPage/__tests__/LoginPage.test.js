import React from 'react';
import LoginPage from '../LoginPage';
import { props } from '../LoginPage.fixtures';
import { testComponentSnapshotsWithFixtures } from '../../../common/testHelpers';

const fixtures = {
  'renders LoginPage': props,
};
describe('Login Page', () => {
  describe('rendering', () => {
    testComponentSnapshotsWithFixtures(LoginPage, fixtures);
  });

  describe('visual regression', () => {
    test('should render a Login Page', async () => {
        await render(
            <LoginPage {...props}></LoginPage>,
            { viewport: { width: 100, height: 100 } }
        );

        const screenshot = await page.screenshot();
        expect(screenshot).toMatchImageSnapshot();
    });
});
});
