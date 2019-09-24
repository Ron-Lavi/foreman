import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, noop } from 'patternfly-react';
import CardList from '../CardList';
import Filter from '../Filter';

class WizardPage extends Component {
  handleFilter = ({ target: { value } }) => {
    const { updateFilter } = this.props;
    updateFilter(value);
  };

  render() {
    const { title, items, filter } = this.props;
    return (
      <Grid className="foreman_wizard_page">
        <h2>{title}</h2>
        <Filter onChange={this.handleFilter} />
        <CardList items={items} filter={filter} />
      </Grid>
    );
  }
}

WizardPage.propTypes = {
  title: PropTypes.string,
  filter: PropTypes.string,
  items: PropTypes.array,
  updateFilter: PropTypes.func,
};

WizardPage.defaultProps = {
  title: null,
  filter: '',
  items: [],
  updateFilter: noop,
};

export default WizardPage;
