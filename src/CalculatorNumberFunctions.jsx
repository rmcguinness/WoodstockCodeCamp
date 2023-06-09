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

  //display a new number on initial click, after an operator click, or after equals click 
  if (display === '0' || isOperator.test(equation[equation.length - 1]) || equation === ''){
    setDisplay(num.val)

  /*if the pos/neg was clicked immediately after an operator, so to display '-0', 
  remove the zero when subsequent numbers are clicked.
  For the current caluclator, the extra 0 is not removed from equation. If the program is
  changed to display the equation as it is entered, the '0' should be removed.*/
  } else if(display === '-0'){
    setDisplay('-' + num.val)
  }else {
    setDisplay(display + num.val)
  }

  //Keep equation at 0 if 0 button is clicked sequentially
  if (num.val === '0' && equation === '0') {
    return equation;
  } else {
    return equation = equation + num.val;
  }
}

const handleDotClick = (num, display, setDisplay, equation) => {

  //if an operator is last clicked, reset the display
  if (isOperator.test(equation[equation.length - 1])){
    setDisplay('0' + num.val)
    return equation = equation + num.val;
  }
  //do not allow for multiple decimals in a number
  if (!display.includes(num.val)) { 
    setDisplay(display + num.val);
    return equation = equation + num.val;  //add the decimal if the number does not already contain one
  } else {
    return equation;     //return the current number in equation if the number already has a decimal,
                            //enabling the user to continue adding digits
  }

}





