import { evaluate, abs } from 'mathjs';

const isOperator = /[+-\/*]/;

export const handleFunctions = (buttonObj, display, setDisplay, equation, setEquation) => {
  const displayValue = buttonObj.displayValue;
  const equationValue = buttonObj.equationValue;
  const action = buttonObj.action;
  let lastClickedOperator = false;

  //check for and handle operator, AC, or "=" click
  switch (action) {
    case 'multiply':
    case 'divide':
    case 'addition':
    case 'subtract':
      setEquation(pushOperator(equation, equationValue, display, lastClickedOperator));
      break;
    case 'clear':
      setEquation('');
      setDisplay('0');
      break;
    case 'pos_neg':
      setDisplay(changeSign(display, displayValue));
      break;
    case 'equals':
      setDisplay(calculate(equation, display));
      setEquation('=');
      break;
  }
};
/*If multiple operators are entered sequentially, only use the last entered.
When an operator is entered, push the displayed numbers to the equation,
along with the clicked operator. */
export const pushOperator = (equation, equationValue, display, lastClickedOperator) => {
  if (isOperator.test(equation[equation.length - 1])) {
    return equation.slice(0, -1) + equationValue;
  } else {
    return equation + equationValue;
  }
};

/*calculate the equation when "=" is clicked, 
displaying ERROR if clicked multiple times or divide by zero*/
export const calculate = (equation) => {
  let equationStr = equation
  
  if (isOperator.test(equation[equation.length - 1])) {
    equationStr = equation.slice(0, -1)
  }
  const answer = evaluate(equationStr);
  console.log(answer)
  
  if (answer === Infinity) {
    return "ERROR";
  } else {
    return answer;
  }
};

//change the sign of the displayed number
export const changeSign = (display) => {
  if (/\d/.test(display)) {
    let num = parseFloat(display);  //change string to float
    if (num > 0) {
      return (0 - num).toString();
    } else {
      return abs(num).toString();
    }
  }
};

