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

import React, { useEffect } from 'react'
import { useRecoilState } from "recoil";
import { displayState } from "./State";
import { equationState } from "./State";

const CalculatorNumberButton = () => {

  const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'];
  const [display, setDisplay] = useRecoilState(displayState);
  const [equation] = useRecoilState(equationState);

  useEffect(() => {
    setDisplay('')
  }, [setDisplay]);

  const buttonClicked = (event) => {

    if (Object.keys(equation).length > 0) {
      setDisplay('');
    }
  
    if ((display[0] === '0' && display[1] !== '.' && event.target.value !== '.') 
      || (display.includes('.') && event.target.value === '.')) {
      return;
    }
    
    else {
      setDisplay(display + event.target.value);
    }
     
  }
  
  const numbersArrayMap = numbersArray.map((number) => {
    return <button value={number} onClick={buttonClicked} key={number}>{number}</button>
  })
  
  
  
  return (
    <>
      <h5>Calculator Number Button</h5>
      <div>{numbersArrayMap}</div>
      <div>{display}</div>
    </>
  )
}

export default CalculatorNumberButton