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
import CalculatorNumberButton from "./CalculatorNumberButton";
import { functions } from "./CalculatorFunctionData";
import { buttons } from "./CalculatorNumberData"


const Calculator = () => {

  let lastClickedOperator =   false;
  
  const functionButtons = functions.map(o => <CalculatorFunctionButton key={o.id} obj={o} 
                          lastClickedOperator={lastClickedOperator}/>)
                          
  const numberButtons = buttons.map(num => <CalculatorNumberButton key={num.val} obj={num}
    lastClickedOperator={lastClickedOperator}/>)
  return(
    <>
      <h3>Calculator</h3>
      <CalculatorDisplay />
      <div id="numberButtons">
        {numberButtons}
      </div>
      <div id="functionButtons">
        {functionButtons}
      </div>
    </>
  )
}

export default Calculator;