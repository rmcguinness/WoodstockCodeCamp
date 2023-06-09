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


import { useRecoilState } from "recoil";
import { displayState, equationState } from "./State";
import { handleClick } from './CalculatorNumberFunctions'

const CalculatorNumberButton = (props) => {
  const [display, setDisplay] = useRecoilState(displayState);
  const [equation, setEquation] = useRecoilState(equationState);
  let num = props.obj;
 
  

  const handleClicked = () => {
    handleClick(num, display, setDisplay, equation, setEquation)
  }

  return (
      <button className="button" id={num.id} onClick={() => handleClicked()}>{num.val}</button>
  )
}

export default CalculatorNumberButton