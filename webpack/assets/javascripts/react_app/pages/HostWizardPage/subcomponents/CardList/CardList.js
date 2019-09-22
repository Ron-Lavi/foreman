import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'patternfly-react';
import Card from '../Card';

const CardList = ({ items }) => (
  <Grid>
    {items.map(item => (
      <Grid.Col xs={6} sm={3}>
        <Card {...item} />
      </Grid.Col>
    ))}
  </Grid>
);

CardList.propTypes = {
  items: PropTypes.array,
};

CardList.defaultProps = {
  items: [],
};

export default CardList;
