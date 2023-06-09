import { evaluate, abs, format } from 'mathjs';

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
      //replace last number in equation to number displayed after the sign changed
      setEquation(equation.slice(0, equation.length - display.length) + switchSign); 
      setDisplay(switchSign);
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

  //if equals is clicked numerous times after evaluating the equation, display a 0
  if (equationStr === ''){
    return '0';
  }

  //if an operator is clicked immediately prior to equals, remove the operator
  if (isOperator.test(equation[equation.length - 1])) {
    equationStr = equation.slice(0, -1);
  }

  //evaluate the equation
  let answer = evaluate(equationStr);
  answer = format(answer, {precision: 15});  //hides round-off errors with floats; returns a string
  
  //display ERROR for divide by zero
  if (answer === 'Infinity') {
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

