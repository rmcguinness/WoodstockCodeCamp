// Copyright 2023 Ryan McGuinness
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorFunctionButton from "./CalculatorFunctionButton";
import { functions } from "./CalculatorFunctionData";
import CalculatorNumberButton from "./CalculatorNumberButton";
import './Calculator.css'


const Calculator = () => {

  let lastClickedOperator = false;
  const functionButtons = functions.map(o => <CalculatorFunctionButton key={o.id} obj={o} 
                          lastClickedOperator={lastClickedOperator}/>)
  return(
    <>
      <h3>Calculator</h3>

    <div className = "calculator-gui">
      <div className = "calculator-display"></div>
      <div className = "calculator-buttons">
      <div className = "calculator-button-row-1">
        <div className = "calculator-button"><p>AC</p></div>
        <div className = "calculator-button function"><p>+/-</p></div>
        <div className = "calculator-button function"><p>÷</p></div>
      </div>
      <div className = "calculator-button-row-2">
        <div className = "calculator-button"><p>7</p></div>
        <div className = "calculator-button"><p>8</p></div>
        <div className = "calculator-button"><p>9</p></div>
        <div className = "calculator-button function"><p>X</p></div>
      </div>
      <div className = "calculator-button-row-3">
        <div className = "calculator-button"><p>4</p></div>
        <div className = "calculator-button"><p>5</p></div>
        <div className = "calculator-button"><p>6</p></div>
        <div className = "calculator-button function"><p>-</p></div>
      </div>
      <div className = "calculator-button-row-4">
        <div className = "calculator-button"><p>1</p></div>
        <div className = "calculator-button"><p>2</p></div>
        <div className = "calculator-button"><p>3</p></div>
        <div className = "calculator-button function"><p>+</p></div>
      </div>        
      <div className = "calculator-button-row-5">
        <div className = "calculator-button"><p>0</p></div>
        <div className = "calculator-button"><p>.</p></div>
        <div className = "calculator-button"><p>=</p></div>
      </div>  
      </div>
    </div>

      <CalculatorDisplay />
      <CalculatorNumberButton lastClickedOperator={lastClickedOperator}/>
      <div id="functionButtons">
        {functionButtons}
      </div>
    </>
  )
}

export default Calculator;