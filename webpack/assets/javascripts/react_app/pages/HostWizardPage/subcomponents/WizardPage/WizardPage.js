import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, noop } from 'patternfly-react';
import CardList from '../CardList';
import Filter from '../Filter';

class WizardPage extends Component {
  componentDidMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }

  handleFilter = ({ target: { value } }) => {
    const { updateFilter } = this.props;
    updateFilter(value);
  };

  handleClick = id => {
    const { selectItem } = this.props;
    selectItem(id);
  };

  render() {
    const {
      title,
      items,
      filter,
      selectedID,
      itemsPage,
      paginate,
    } = this.props;
    return (
      <Grid fluid className="foreman_wizard_page">
        <h2>{title}</h2>
        <Filter onChange={this.handleFilter} />
        <CardList
          items={items}
          filter={filter}
          onClick={this.handleClick}
          selectedID={selectedID}
          itemsPage={itemsPage}
          onPaginate={paginate}
        />
      </Grid>
    );
  }
}

WizardPage.propTypes = {
  title: PropTypes.string,
  filter: PropTypes.string,
  items: PropTypes.array,
  itemsPage: PropTypes.number,
  selectedID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  updateFilter: PropTypes.func,
  fetchItems: PropTypes.func,
  selectItem: PropTypes.func,
  paginate: PropTypes.func,
};

WizardPage.defaultProps = {
  title: null,
  filter: '',
  items: [],
  itemsPage: 1,
  selectedID: null,
  updateFilter: noop,
  fetchItems: noop,
  selectItem: noop,
  paginate: noop,
};

export default WizardPage;
