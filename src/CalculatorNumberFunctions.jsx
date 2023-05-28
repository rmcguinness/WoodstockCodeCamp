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

  //display a new number after an equals was clicked
  if (equation[equation.length - 1] === '='){
    equationStr = equation.slice(0, -1)
    setDisplay(num.val)

  //display a new number on initial click or after an operator click  
  }else if (display === '0' || isOperator.test(equation[equation.length - 1])){
    setDisplay(num.val)
  } else {
    setDisplay(display + num.val)
  }
  return equationStr = equationStr + num.val;
}

const handleDotClick = (num, display, setDisplay, equation) => {

  let equationStr = equation;
  //if an operator is last clicked, reset the display
  if (isOperator.test(equation[equation.length - 1])){
    setDisplay(num.val)
    return equationStr = equationStr + num.val;
  }
  //do not allow for multiple decimals in a number
  if (!display.includes(num.val)) { 
    setDisplay(display + num.val);
    return equationStr = equationStr + num.val;
  }

}





