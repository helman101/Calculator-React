import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  if (operation === '+') {
    result = Big(Number(numberOne) + Number(numberTwo));
  }
  if (operation === '-') {
    result = Big(Number(numberOne) - Number(numberTwo));
  }
  if (operation === 'X') {
    result = Big(Number(numberOne) * Number(numberTwo));
  }
  if (operation === '÷') {
    result = Big(Number(numberOne) / Number(numberTwo));
  }
  if (operation === '%') {
    result = (Big(Number(numberOne) / 100) * Number(numberTwo));
  }
  return result;
};

export default operate;
