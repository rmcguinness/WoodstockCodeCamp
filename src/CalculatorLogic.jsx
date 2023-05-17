import { evaluate, abs } from 'mathjs';

//const isOperator = /[+-\/*]/;

export const handleFunctions = (buttonObj, display, setDisplay, equation, setEquation, lastClickedOperator) => {
  const displayValue = buttonObj.displayValue;
  const equationValue = buttonObj.equationValue;
  const action = buttonObj.action;

  //check for and handle operator, AC, or "=" click
  switch (action) {
    case 'multiply':
    case 'divide':
    case 'addition':
    case 'subtract':
      setEquation(pushOperator(equation, equationValue, display, lastClickedOperator));
      break;
    case 'clear':
      setEquation('0');
      setDisplay('0');
      lastClickedOperator = 'false';
      break;
    case 'pos_neg':
      setDisplay(changeSign(display, displayValue, lastClickedOperator));
      break;
    case 'equals':
      setDisplay(calculate(equation, lastClickedOperator));
      setEquation('0');
      break;
  }
};
/*If multiple operators are entered sequentially, only use the last entered.
When an operator is entered, push the displayed numbers to the equation,
along with the clicked operator. */
export const pushOperator = (equation, equationValue, display, lastClickedOperator) => {
  if (lastClickedOperator) {
    return equation.slice(0, -1) + equationValue;
  } else {
    lastClickedOperator = 'true';   //change operator click to true to track last clicked was an operator
    return equation + display + equationValue;
  }
};

/*calculate the equation when "=" is clicked, 
displaying ERROR if clicked multiple times or divide by zero*/
export const calculate = (equation, lastClickedOperator) => {
  lastClickedOperator = 'false';  //track operator click
  let answer = evaluate(equation);
  if (answer == Infinity) {
    return "ERROR";
  } else {
    return answer;
  }
};

//change the sign of the displayed number
export const changeSign = (display, lastClickedOperator) => {
  if (/\d/.test(display)) {
    lastClickedOperator = 'false';  //track operator click
    let num = parseFloat(display);  //change string to float
    if (num > 0) {
      return (0 - num).toString();
    } else {
      return abs(num).toString();
    }
  }
};

