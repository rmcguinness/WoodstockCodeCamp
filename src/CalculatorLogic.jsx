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
      setEquation(pushOperator(equation, equationValue));   //calls function to handle the operator click
      break;
    
    case 'clear':
      //resets the state of equation and display to defaults
      setEquation('');
      setDisplay('0');
      break;
    
    case 'pos_neg':
      let switchSign = changeSign(display, equation, setEquation);  //calls function that returns the number with the opposite sign

      if(switchSign === '-0'){
        setEquation(equation + switchSign);
      }else {
      //replace last number in equation to number displayed after the sign changed
      setEquation(equation.slice(0, equation.length - display.length) + switchSign);
      }
      //displays the number with the opposite sign
      setDisplay(switchSign);   
      break;
    
    case 'equals':
      setDisplay(calculate(equation));   //calls equation to handle equals click and return the answer to display
      setEquation('');        //resets equation to default state
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
    return equation + equationValue;     //returns current equation string with the concatenated clicked operator 
  }
};

/*calculate the equation when "=" is clicked, 
displaying ERROR if clicked multiple times or divide by zero*/
export const calculate = (equation) => {
  //if equals is clicked numerous times after evaluating the equation, return a "0" to display
  if (equation === ''){
    return '0';
  }

  //if an operator is clicked immediately prior to equals, remove the dangling operator
  if (isOperator.test(equation[equation.length - 1])) {
    equation = equation.slice(0, -1);
  }

  //evaluate the equation
  let answer = evaluate(equation);
  answer = format(answer, {precision: 15});  //hides round-off errors with floats; returns a string
  
  //display ERROR for divide by zero
  if (answer === 'Infinity') {
    return "ERROR";
  } else {
    return answer;    //return the evaluated equation
  }
};

//change the sign of the displayed number
export const changeSign = (display, equation) => {
  if (display === '0' || (isOperator.test(equation[equation.length - 1]))){
    return "-0";
  }else {
    if (display > 0) {
      return (0 - display).toString();
    } else {
      return abs(display).toString();
    }
  }
};

