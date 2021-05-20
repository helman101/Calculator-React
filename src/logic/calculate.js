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
      if (next === '') {
        return { total, next, operation };
      }
      total = (operate(total, next, operation)).toString();
      next = '';
      operation = null;

      break;

    default:
      if (operation === null) {
        operation = buttonName;
      } else {
        total = (operate(total, next, operation)).toString();
        next = '';
        operation = buttonName;
      }
      break;
  }

  return { total, next, operation };
};

export default calculate;
