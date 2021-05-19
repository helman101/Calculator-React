import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../style.module.css';

const Display = (props) => {
  const { total } = props;
  return (
    <div className={`${styles.dFlex} ${styles.display}`}>
      <p>{total}</p>
    </div>
  );
};

Display.propTypes = { total: PropTypes.string };
Display.defaultProps = { total: '0' };

export default Display;
