import React from 'react';
import { storiesOf } from '@storybook/react';
import CardList from './CardList';
import { items } from './CardList.fixtures';

storiesOf('Components/HostWizard/Card', module).add('Basic Card List', () => (
  <div style={{ padding: '20px' }}>
    <CardList items={items} />
  </div>
));
