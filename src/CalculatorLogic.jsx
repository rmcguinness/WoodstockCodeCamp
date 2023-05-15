import { evaluate, abs } from 'mathjs';

const isOperator = /[+-\/*]/;

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
      setEquation(pushOperator(equation, equationValue, display));
      break;
    case 'clear':
      setEquation('');
      setDisplay('0');
      break;
    case 'pos_neg':
      setDisplay(changeSign(display, displayValue));
      break;
    case 'equals':
      setDisplay(calculate(equation));
      setEquation('');
      break;
  }
};
/*If multiple operators are entered sequentially, only use the last entered.
When an operator is entered, push the displayed numbers to the equation,
along with the clicked operator. */
const pushOperator = (equation, equationValue, display) => {
  if (isOperator.test(equation.slice(-1))) {
    return equation.slice(0, -1) + equationValue;
  } else {
    return equation + display + equationValue;
  }
};

/*calculate the equation when "=" is clicked, 
displaying ERROR if clicked multiple times or divide by zero*/
const calculate = () => {
  if (equation.slice(-1) == "=") {
    return "ERROR";
  }
  let answer = evaluate(equation);
  if (answer == Infinity) {
    return "ERROR";
  } else {
    return answer;
  }
};

//class InvalidInputError extends Error{}

//change the sign of the displayed number
export const changeSign = (display) => {
  if (/\d/.test(display)) {
    let num = parseFloat(display);
    if (num > 0) {
      return (0 - num).toString();
    } else {
      return abs(num).toString();
    }
  }
  // throw new InvalidInputError('Invalid input');
};

