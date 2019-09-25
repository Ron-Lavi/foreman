import React from 'react';
import PropTypes from 'prop-types';
import { Grid, noop } from 'patternfly-react';
import Card from '../Card';
import './cardList.scss';
import PaginationArrow from '../PaginationArrow';
import { chunkItemsByAmount } from '../WizardPage/WizardPageHelper';

const CardList = ({
  items: originalItems,
  filter,
  onClick,
  selectedID,
  itemsPage,
  onPaginate,
}) => {
  if (!originalItems.length) {
    return <h1>No Items To show..</h1>;
  }

  const items = originalItems[itemsPage - 1];
  let filteredItems = items;
  if (filter) {
    const filterLowerCased = filter.toLowerCase();
    filteredItems = [];
    originalItems.forEach(items => items.forEach(item => {
      if(item.title.toLowerCase().includes(filterLowerCased)){
        filteredItems.push(item);
      }
    }))
    filteredItems = chunkItemsByAmount(filteredItems)[0]
  }

  if (!filteredItems.length) {
    return <h1>Could not find items..</h1>;
  }
  
  const displayedItems = filteredItems.map((item, index) => {
    const selected = item.id === selectedID;
    return (
      <Grid.Col key={index} xs={6} sm={3}>
        <Card {...item} selected={selected} onClick={onClick} />
      </Grid.Col>
    );
  });

  return (
    <Grid.Row>
      <div className="wizard_card_list">
        <Grid.Col xs={1}>
          <PaginationArrow
            direction="left"
            disabled={itemsPage === 1}
            onClick={() => onPaginate(itemsPage - 1)}
          />
        </Grid.Col>
        <Grid.Col xs={10}>{displayedItems}</Grid.Col>
        <Grid.Col xs={1}>
          <PaginationArrow
            direction="right"
            disabled={itemsPage === originalItems.length}
            onClick={() => onPaginate(itemsPage + 1)}
          />
        </Grid.Col>
      </div>
    </Grid.Row>
  );
};

CardList.propTypes = {
  items: PropTypes.array,
  filter: PropTypes.string,
  onClick: PropTypes.func,
  selectedID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  itemsPage: PropTypes.number,
  onPaginate: PropTypes.func,
};

CardList.defaultProps = {
  items: [],
  filter: '',
  onClick: noop,
  selectedID: null,
  itemsPage: 1,
  onPaginate: noop,
};

export default CardList;
