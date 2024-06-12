import { evaluate, abs, format } from 'mathjs';

const isOperator = /\+|-|\*|\//;  //Checks for operators

export const handleFunctions = (buttonObj, display, setDisplay, equation, setEquation) => {
  const equationValue = buttonObj.equationValue;
  const action = buttonObj.action;

  //Check for and handle operator, AC, or "=" click
  switch (action) {
    case 'multiply':
    case 'divide':
    case 'addition':
    case 'subtract':
      setEquation(pushOperator(equation, equationValue));   //Calls function to handle the operator click
      break;
    
    case 'clear':
      //Resets the state of equation and display to defaults
      setEquation('');
      setDisplay('0');
      break;
    
    case 'pos_neg':
      let switchSign = changeSign(display, equation, setEquation);  //calls function that returns the number with the opposite sign

      //If pos/neg is clicked immediately after an operator, add '-0' to the equation
      if(switchSign === '-0'){
        setEquation(equation + switchSign);
      }else {
      //Replace last number in equation to number displayed after the sign changed
      setEquation(equation.slice(0, equation.length - display.length) + switchSign);
      }
      //Displays the number with the opposite sign
      setDisplay(switchSign);   
      break;
    
    case 'equals':
      setDisplay(calculate(equation));   //Calls equation to handle equals click and return the answer to display
      setEquation('');        //Resets equation to default state
      break;
    
    default:
      break;
  }
};
/* If multiple operators are entered sequentially, only use the last entered.
When an operator is entered, push the displayed numbers to the equation,
along with the clicked operator. */
export const pushOperator = (equation, equationValue) => {
  if (isOperator.test(equation[equation.length - 1])) {
    return equation.slice(0, -1) + equationValue;
  } else {
    return equation + equationValue;     //Returns current equation string with the concatenated clicked operator 
  }
};

/* Calculate the equation when "=" is clicked, 
displaying ERROR if clicked multiple times or divide by zero */
export const calculate = (equation) => {
  //If equals is clicked numerous times after evaluating the equation, return a "0" to display
  if (equation === ''){
    return '0';
  }

  //If an operator is clicked immediately prior to equals, remove the dangling operator
  if (isOperator.test(equation[equation.length - 1])) {
    equation = equation.slice(0, -1);
  }

  //Evaluate the equation
  let answer = evaluate(equation);
  answer = format(answer, {precision: 15});  //Hides round-off errors with floats; returns a string
  
  //Return ERROR for divide by zero
  if (answer === 'Infinity') {
    return "ERROR";
  } else {
    return answer;    //Return the evaluated equation
  }
};

//Change the sign of the displayed number
export const changeSign = (display, equation) => {

  /* If pos/neg is clicked first, when the display is zero, 
  or immediately after an operator, return '-0' */
  if (display === '0' || (isOperator.test(equation[equation.length - 1]))){
    return "-0";
  }else {
    if (display > 0) {
      return (0 - display).toString();    //Return the negative of a positive number
    } else {
      return abs(display).toString();     //Return the positive of a negative number
    }
  }
};

