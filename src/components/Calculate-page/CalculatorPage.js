import React from 'react';
import Navbar from '../Navbar/Navbar';
import Calculator from '../calculator/Calculator';
import * as styles from '../../style.module.css';

const CalculatorPage = () => (
  <div>
    <Navbar />
    <div className={`${styles.pages} ${styles.dFlex} ${styles.width100} ${styles.justifySpaceBetween}`}>
      <h1>Let’s do some math!</h1>
      <Calculator />
    </div>
  </div>
);

export default CalculatorPage;
