import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  switch(operation) {
    
    case '-':
      Big(numberOne) - Big(numberTwo)
      break;
    case '+':
      Big(numberOne) + Big(numberTwo)
      break;
    case 'X':
      Big(numberOne) * Big(numberTwo)
      break;
    case '÷':
      Big(numberOne) / Big(numberTwo)
      break;
    case '%':
      Big(numberOne) / 100
      break;
  }
}

export default operate