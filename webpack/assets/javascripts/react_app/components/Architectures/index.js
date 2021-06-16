import React from 'react';
import { Button } from '@patternfly/react-core';
import { foremanUrl } from '../../common/helpers';
import { translate as __ } from '../../common/I18n';
import IndexPageTemplate from '../common/IndexPageTemplate';

const Architectures = props => {
  const path = foremanUrl('/architectures');
  return (
    <IndexPageTemplate
      path={path}
      layoutProps={{
        toolbarButtons: (
          <Button variant="primary" href={`${path}/new`}>
            {__('Create')}
          </Button>
        ),
      }}
    />
  );
};

export default Architectures;
