import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from 'patternfly-react';
import './card.scss';

const Card = ({ logo, title, className, onClick }) => (
  <div
    tabIndex="-1"
    className={classNames('foreman_host_wizard_card', className)}
    onClick={onClick}
  >
    <img src={logo} alt="card logo" />
    <p className="title">{title}</p>
  </div>
);

Card.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

Card.defaultProps = {
  className: null,
  logo: '',
  onClick: noop,
  title: null,
};

export default Card;
