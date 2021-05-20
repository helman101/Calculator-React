import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import * as styles from '../../style.module.css';

const ButtonPanel = (props) => {
  const { clickHandler } = props;

  return (
    <div className={`${styles.dFlex} ${styles.flexColumn}`}>
      <div className={`${styles.height100px}`}>
        <>
          <Button color clickHandler={clickHandler} name="AC" />
          <Button color clickHandler={clickHandler} name="+/-" />
          <Button color clickHandler={clickHandler} name="%" />
          <Button clickHandler={clickHandler} name="÷" />
        </>
      </div>
      <div className={`${styles.height100px}`}>
        <>
          <Button color clickHandler={clickHandler} name="7" />
          <Button color clickHandler={clickHandler} name="8" />
          <Button color clickHandler={clickHandler} name="9" />
          <Button clickHandler={clickHandler} name="X" />
        </>
      </div>
      <div className={`${styles.height100px}`}>
        <>
          <Button color clickHandler={clickHandler} name="4" />
          <Button color clickHandler={clickHandler} name="5" />
          <Button color clickHandler={clickHandler} name="6" />
          <Button clickHandler={clickHandler} name="-" />
        </>
      </div>
      <div className={`${styles.height100px}`}>
        <>
          <Button color clickHandler={clickHandler} name="1" />
          <Button color clickHandler={clickHandler} name="2" />
          <Button color clickHandler={clickHandler} name="3" />
          <Button clickHandler={clickHandler} name="+" />
        </>
      </div>
      <div className={`${styles.height100px}`}>
        <>
          <Button color wide clickHandler={clickHandler} name="0" />
          <Button color clickHandler={clickHandler} name="." />
          <Button clickHandler={clickHandler} name="=" />
        </>
      </div>
    </div>
  );
};

ButtonPanel.propTypes = { clickHandler: PropTypes.func.isRequired };

export default ButtonPanel;
