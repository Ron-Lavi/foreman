import React from 'react';
import PropTypes from 'prop-types';
import { Grid, FormGroup, FormControl, noop } from 'patternfly-react';

const Filter = ({ onChange }) => (
  <Grid.Row>
    <Grid.Col sm={4}>
      <FormGroup controlId="filter">
        <FormControl
          type="text"
          placeholder="Filter.."
          onChange={onChange}
          autoComplete="off"
        />
      </FormGroup>
    </Grid.Col>
  </Grid.Row>
);

Filter.propTypes = {
  onChange: PropTypes.func,
};

Filter.defaultProps = {
  onChange: noop,
};

export default Filter;
