import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from 'patternfly-react';
import './card.scss';

const Card = ({ id, logo, title, className, onClick, selected }) => (
  <div
    className={classNames('foreman_host_wizard_card', className, { selected })}
    onClick={() => onClick(id)}
  >
    <img src={logo} alt="card logo" />
    <p className="title">{title}</p>
  </div>
);

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
  logo: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  selected: PropTypes.bool,
};

Card.defaultProps = {
  className: null,
  logo: '',
  onClick: noop,
  title: '',
  selected: false,
};

export default Card;
