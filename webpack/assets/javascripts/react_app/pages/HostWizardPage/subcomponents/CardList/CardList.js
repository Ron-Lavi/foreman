import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'patternfly-react';
import Card from '../Card';

const CardList = ({ items, filter }) => {
  if (!items.length) {
    return <h1>No Items To show..</h1>;
  }

  let filteredItems = items;
  if (filter) {
    const filterLowerCased = filter.toLowerCase();
    filteredItems = items.filter(({ title }) =>
      title.toLowerCase().includes(filterLowerCased)
    );
  }

  if (!filteredItems.length) {
    return <h1>Could not find items..</h1>;
  }
  return (
    <Grid.Row>
      {filteredItems.map((item, index) => (
        <Grid.Col key={index} xs={6} sm={3}>
          <Card {...item} />
        </Grid.Col>
      ))}
    </Grid.Row>
  );
};

CardList.propTypes = {
  items: PropTypes.array,
  filter: PropTypes.string,
};

CardList.defaultProps = {
  items: [],
  filter: '',
};

export default CardList;
