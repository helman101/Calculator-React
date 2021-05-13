import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { total } = props;
  return (
    <div>
      <p>{total}</p>
    </div>
  );
};

Display.propTypes = { total: PropTypes.string };
Display.defaultProps = { total: '0' };

export default Display;
