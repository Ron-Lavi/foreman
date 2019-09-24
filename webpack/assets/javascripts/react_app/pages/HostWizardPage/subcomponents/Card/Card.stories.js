import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';
import hostGroupLogo from '../../assets/host_group.png';

storiesOf('Components/HostWizard/Card', module).add('Basic Card', () => (
  <div style={{ width: '200px', margin: '20px' }}>
    <Card title="Host Group" logo={hostGroupLogo} />
  </div>
));
