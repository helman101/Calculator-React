import React from 'react';
import Calculator from '../calculator/Calculator';
import * as styles from '../../style.module.css';

const CalculatorPage = () => (
  <div className={`${styles.pages} ${styles.dFlex} ${styles.width100} ${styles.justifySpaceBetween}`}>
    <h1>Let’s do some math!</h1>
    <Calculator />
  </div>
);

export default CalculatorPage;
