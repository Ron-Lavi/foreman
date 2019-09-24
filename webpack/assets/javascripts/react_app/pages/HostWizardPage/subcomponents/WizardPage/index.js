import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './WizardPageActions';
import reducer from './WizardPageReducer';
import { selectFilter } from './WizardPageSelectors';

import WizardPage from './WizardPage';

// map state to props
const mapStateToProps = state => ({
  /** add state keys here */
  filter: selectFilter(state),
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
