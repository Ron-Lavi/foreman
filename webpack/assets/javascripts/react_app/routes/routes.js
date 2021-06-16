import React from 'react';
import HostWizard from './HostWizard';
import Audits from './Audits';
import Models from './Models';
import HostDetails from './HostDetails';
import RegistrationCommands from './RegistrationCommands';
import Architectures from '../components/Architectures';

export const routes = [
  HostWizard,
  Audits,
  Models,
  HostDetails,
  RegistrationCommands,
  {
    path: '/next_architectures',
    render: props => <Architectures {...props} />,
  },
];
