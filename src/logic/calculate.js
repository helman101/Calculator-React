import operate from './operate'

const calculate = ({ total, next, operation }, buttonName) => {
  switch(buttonName) {

    case '+/-':
        total *= -1
        next *= -1
      break;
    
    case '.':
      
      break;
    
    case '=':

      break;
    
    case 'AC':
      total = 0;
      next = 0;
      break;

    default:
      operate(total, next, operation)
      break;
  }
}

export default calculate