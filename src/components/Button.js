import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, clickHandler } = props;
  return (
    <button onClick={clickHandler} type="button" value={name}>
      {name}
    </button>
  );
};

Button.propTypes = { name: PropTypes.string.isRequired };
Button.propTypes = { clickHandler: PropTypes.func.isRequired };

export default Button;
