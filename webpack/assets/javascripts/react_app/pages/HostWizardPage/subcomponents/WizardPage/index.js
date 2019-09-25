import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './WizardPageActions';
import reducer from './WizardPageReducer';
import {
  selectFilter,
  selectSelectedID,
  selectItems,
  selectItemsPage,
} from './WizardPageSelectors';

import WizardPage from './WizardPage';

// map state to props
const mapStateToProps = state => ({
  /** add state keys here */
  filter: selectFilter(state),
  selectedID: selectSelectedID(state),
  items: selectItems(state),
  itemsPage: selectItemsPage(state),
});

// map action dispatchers to props
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// export reducers
export const reducers = { wizardPage: reducer };

// export connected component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WizardPage);
