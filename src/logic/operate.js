import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  if (operation === '+') {
    result = Big(numberOne) + Big(numberTwo);
  }
  if (operation === '-') {
    result = Big(numberOne) - Big(numberTwo);
  }
  if (operation === 'X') {
    result = Big(numberOne) * Big(numberTwo);
  }
  if (operation === '÷') {
    result = Big(numberOne) / Big(numberTwo);
  }
  if (operation === '%') {
    result = Big(numberOne) / 100;
  }
  return result;
};

export default operate;
