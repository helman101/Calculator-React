import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  switch (buttonName) {
    case '+/-':
      total = (total * -1).toString();
      next = next === '' ? next : (next * -1).toString();
      break;

    case 'AC':
      total = '0';
      next = '';
      operation = null;
      break;

    case '.':
      if (next === '') {
        total = total.concat('.');
      } else {
        next = next.concat('.');
      }

      break;

    case '=':
      total = (operate(total, next, operation)).toString();
      next = '';
      break;

    default:
      operation = buttonName;
      break;
  }

  return { total, next, operation };
};

export default calculate;
