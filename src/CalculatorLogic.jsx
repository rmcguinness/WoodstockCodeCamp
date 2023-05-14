import { evaluate, abs } from "mathjs"

export const handleFunctions = (buttonObj, display, setDisplay, equation, setEquation) => {
    const isOperator = /[+-\/*]/;
    //check for and handle operator, AC, or "=" click
    switch (buttonObj.value) {
        case (isOperator):
          pushOperator();
          break;
        case ('AC'):
          setEquation('');
          setDisplay('0'); 
          break;
        case ('+/-'):
          changeSign();
          break;
        case ('='):
          calculate();
          break;
    }
    //if multiple operators are entered sequentially, only use the last entered
    const pushOperator = () => {
        if (isOperator.test(display.slice(-1))) {
            setEquation(equation.slice(0, -1) + buttonObj.value);
        } else {
            setEquation(equation + buttonObj.value);
            //need to make display start over when next number is added
        }
    }
    /*calculate the equation when "=" is clicked, 
    displaying ERROR if clicked multiple times or divide by zero*/
    const calculate = () => {
        if (equation.slice(-1) == "="){
            setDisplay("ERROR");
        }
        let answer = evaluate(equation);
        if (answer == Infinity){
            setDisplay("ERROR");
          } else {
            setDisplay(answer);  
            setEquation("");
          }
    }
    //change the sign of the displayed number
    const changeSign = () => {
      let numStr = equation;
      if (buttonObj.value === "+/-" && /\d/.test(display)){
        if (display > 0) {
          setDisplay(0 - display);
          numStr = numStr.slice(0, (0 - display.toString.length - 1)) + display;
          setEquation(numStr);
        } else {
          setDisplay(abs(display));
          numStr = numStr.slice(0, -(display.length)) + display;
          setEquation(numStr);
        }
    }
};

