const isOperator = /\+|-|\*|\//; //checks for operators

export const handleClick = (num, display, setDisplay, equation, setEquation) => {

  if (num.func === 'handleNumberClick') {
    setEquation(handleNumberClick(num, display, setDisplay, equation));
  }

  else {
    setEquation(handleDotClick(num, display, setDisplay, equation));   
  }
}

const handleNumberClick = (num, display, setDisplay, equation) => {

  let equationStr = equation;

  //display a new number on initial click, after an operator click, or after equals click 
  if (display === '0' || isOperator.test(equation[equation.length - 1]) || equationStr === ''){
    setDisplay(num.val)
  } else {
    setDisplay(display + num.val)
  }

  //Keep equation at 0 if 0 button is clicked sequentially
  if (num.val === '0' && equation === '0') {
    return equationStr;
  } else {
    return equationStr = equationStr + num.val;
  }
}

const handleDotClick = (num, display, setDisplay, equation) => {

  let equationStr = equation;

  //if an operator is last clicked, reset the display
  if (isOperator.test(equation[equation.length - 1])){
    setDisplay('0' + num.val)
    return equationStr = equationStr + num.val;
  }
  //do not allow for multiple decimals in a number
  if (!display.includes(num.val)) { 
    setDisplay(display + num.val);
    return equationStr = equationStr + num.val;  //add the decimal if the number does not already contain one
  } else {
    return equationStr;     //return the current number in equation if the number already has a decimal,
                            //enabling the user to continue adding digits
  }

}





