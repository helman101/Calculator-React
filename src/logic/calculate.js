import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  let newTotal;
  let newNext;

  switch (buttonName) {
    case '+/-':
      newTotal = total * -1;
      newNext = next * -1;
      break;

    case '=':
      return total;

    case '.':
      newTotal = parseFloat(total);
      break;

    case 'AC':
      newTotal = 0;
      newNext = 0;
      break;

    default:
      newTotal = operate(total, next, operation);
      break;
  }

  return { newTotal, newNext, operation };
};

export default calculate;
