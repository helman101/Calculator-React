import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../../style.module.css';

const Button = (props) => {
  const {
    name, clickHandler, color, wide,
  } = props;

  return (
    <button className={`${styles.button} ${wide ? styles.zeroButton : styles.normalButton} ${color ? styles.lightGrayBG : styles.orangeBG}`} onClick={clickHandler} type="button" value={name}>
      {name}
    </button>
  );
};

Button.propTypes = { name: PropTypes.string.isRequired };
Button.propTypes = { color: PropTypes.bool };
Button.propTypes = { wide: PropTypes.bool };
Button.propTypes = { clickHandler: PropTypes.func.isRequired };
Button.defaultProps = { color: false };
Button.defaultProps = { wide: false };

export default Button;
