import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Components/HostWizard/Card', module).add('Basic Card', () => (
  <div style={{ width: '200px', margin: '20px' }}>
    <Card
      title="Host Group"
      logo="https://image.flaticon.com/icons/png/128/1085/1085839.png"
    />
  </div>
));
