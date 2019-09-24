import React from 'react';
import PageLayout from '../common/PageLayout/PageLayout';
import { translate as __ } from '../../common/I18n';
import { items } from './subcomponents/CardList/CardList.fixtures';
import WizardPage from './subcomponents/WizardPage';

const LoadingWizardExample = props => (
  <PageLayout header={__('Host Wizard')} searchable={false}>
    <WizardPage title="Please select a type of Host Group" items={items} />
  </PageLayout>
);

export default LoadingWizardExample;
