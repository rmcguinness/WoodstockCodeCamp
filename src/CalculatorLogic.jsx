import { evaluate, abs } from 'mathjs';

const isOperator = /[+-\/*]/;

export const handleFunctions = (buttonObj, display, setDisplay, equation, setEquation) => {
  const displayValue = buttonObj.displayValue;
  const equationValue = buttonObj.equationValue;
  const action = buttonObj.action;

  //check for and handle operator, AC, or "=" click
  switch (action) {
    case 'multipy':
    case 'divide':
    case 'addtion':
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

//change the sign of the displayed number
const changeSign = (displayValue) => {
  if (displayValue === "+/-" && /\d/.test(display)) {
    if (display > 0) {
      return 0 - display;
    } else {
      return abs(display);
    }
  }
};

