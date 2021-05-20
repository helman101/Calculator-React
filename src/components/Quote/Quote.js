import React from 'react';
import Navbar from '../Navbar/Navbar';
import * as styles from '../../style.module.css';

const Quote = () => (
  <div>
    <Navbar />
    <div className={`${styles.width100} ${styles.pages} ${styles.quote}`}>
      <p>Without mathematics, there’s nothing you can do.</p>
      <p>Everything around you is mathematics.</p>
      <p>Everything around you is numbers.</p>
      <p>– Shakuntala Devi</p>
    </div>
  </div>
);

export default Quote;
