import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  switch (buttonName) {
    case '+/-':
      total *= -1;
      next *= -1;
      break;

    case '=':
      total;
      break;

    case 'AC':
      total = 0;
      next = 0;
      break;

    default:
      total = operate(total, next, operation);
      break;
  }
};

export default calculate;
