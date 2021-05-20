import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../../logic/calculate';
import * as styles from '../../style.module.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: '',
    operation: null,
  });

  const { total, next, operation } = state;

  const handleClick = (e) => {
    const buttonName = e.target.value;
    const number = Number(buttonName);
    if (!Number.isNaN(number)) {
      if (operation !== null) {
        setState({
          ...state,
          next: total === '0' ? buttonName : next.concat(buttonName),
        });
      } else {
        setState({
          ...state,
          total: total === '0' ? buttonName : total.concat(buttonName),
        });
      }
    } else {
      const newState = calculate(state, buttonName);
      setState(newState);
    }
  };

  return (
    <div className={`${styles.calculator} ${styles.dFlex} ${styles.flexColumn} ${styles.height100px}`}>
      <>
        <Display total={next === '' ? total : next} />
        <ButtonPanel clickHandler={handleClick} />
      </>
    </div>
  );
};

export default Calculator;
