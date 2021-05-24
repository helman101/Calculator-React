import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from '../../style.module.css';

const Navbar = () => (
  <div className={`${styles.width100} ${styles.dFlex} ${styles.navbar} ${styles.alignItemsCenter} ${styles.justifySpaceBetween}`}>
    <h1>Math Magicians</h1>
    <div>
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </div>
  </div>
);

export default Navbar;
