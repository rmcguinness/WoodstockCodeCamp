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
        case ('='):
            calculate();
            break;
    }
    //if multiple operators are entered sequentially, only use the last entered
    const pushOperator = () => {
        if (operators.test(display.slice(-1))) {
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
    
};

export const handleNumClick = (buttonObj, display, setDisplay, equation, setEquation) => {
    let isDigit = /\d/;
    let isOperator = /[+-\/*]/;
    let numStr = display;
    let equationStr = equation;
     //don't allow multiple beginning zeros
    if(numStr[0] == 0 && numStr[1] != "." && isDigit.test(buttonObj.value)){
        setEquation(buttonObj.value);
        setDisplay(buttonObj.value);
        return;
     //don't allow more than one decimal per number
    } else if (/\d || ./.test(equation) && !buttonObj.action){
        if (buttonObj.value === "." && equation.includes(".")) {
          return;
        }else {
          //display the new number after an operator
          if (isOperator.test(equation.slice(-1)) && equation.slice(-1) != "."){
            setDisplay(buttonObj.value);
            equationStr = equationStr + buttonObj.value;
            setEquation(equationStr);
            return;
          } else {
          //display numbers if no operator was selected
            }
        }
    }
}