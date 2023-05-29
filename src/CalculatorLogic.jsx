import { evaluate, abs } from 'mathjs';

const isOperator = /\+|-|\*|\//;  //checks for operators

export const handleFunctions = (buttonObj, display, setDisplay, equation, setEquation) => {
  const displayValue = buttonObj.displayValue;
  const equationValue = buttonObj.equationValue;
  const action = buttonObj.action;

  //check for and handle operator, AC, or "=" click
  switch (action) {
    case 'multiply':
    case 'divide':
    case 'addition':
    case 'subtract':
      setEquation(pushOperator(equation, equationValue));
      break;
    case 'clear':
      setEquation('');
      setDisplay('0');
      break;
    case 'pos_neg':
      let switchSign = changeSign(display, displayValue);
      setDisplay(switchSign);
      setEquation(equation.slice(0, -1) + switchSign);   //replace last number in equation to number with opposite sign
      break;
    case 'equals':
      setDisplay(calculate(equation));
      setEquation('');
      break;
    default:
      break;
  }
};
/*If multiple operators are entered sequentially, only use the last entered.
When an operator is entered, push the displayed numbers to the equation,
along with the clicked operator. */
export const pushOperator = (equation, equationValue) => {
  if (isOperator.test(equation[equation.length - 1])) {
    return equation.slice(0, -1) + equationValue;
  } else {
    return equation + equationValue;
  }
};

/*calculate the equation when "=" is clicked, 
displaying ERROR if clicked multiple times or divide by zero*/
export const calculate = (equation) => {
  let equationStr = equation;

  if (equationStr === ''){
    return '0';
  }

  if (isOperator.test(equation[equation.length - 1])) {
    equationStr = equation.slice(0, -1);
  }
  const answer = evaluate(equationStr);
  
  if (answer === Infinity) {
    return "ERROR";
  } else {
    return answer;
  }
};

//change the sign of the displayed number
export const changeSign = (display) => {
  if (/\d/.test(display)) {
    let num = display;
    if (num > 0) {
      return (0 - num).toString();
    } else {
      return abs(num).toString();
    }
  }
};

