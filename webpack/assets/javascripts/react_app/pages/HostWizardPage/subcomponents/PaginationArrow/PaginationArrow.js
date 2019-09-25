import React from 'react';
import PropTypes from 'prop-types';
import { Icon, noop } from 'patternfly-react';
import classNames from 'classnames';

const PaginationArrow = ({ direction, disabled, onClick }) => {
  const handleClick = () => {
    if (disabled) return;
    onClick();
  };
  return (
    <div
      className={classNames('pagination_arrow', { disabled })}
      onClick={handleClick}
    >
      <Icon name={`arrow-circle-${direction}`} />
    </div>
  );
};

PaginationArrow.propTypes = {
  direction: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

PaginationArrow.defaultProps = {
  direction: 'left',
  disabled: false,
  onClick: noop,
};

export default PaginationArrow;
